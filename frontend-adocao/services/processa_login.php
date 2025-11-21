<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Responde requisição OPTIONS (pré-flight do CORS)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once 'conexao.php';

// Garante que só aceita POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido: ' . $_SERVER["REQUEST_METHOD"]]);
    exit;
}

$cpf = preg_replace('/\D/', '', $_POST['cpf'] ?? '');
$senha = $_POST['senha'] ?? '';

if (empty($cpf) || empty($senha)) {
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos']);
    exit;
}

try {
    $sql = "SELECT * FROM usuario WHERE cpf = :cpf LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        if (password_verify($senha, $usuario['senha'])) {
            // como o CPF é sua chave primária, podemos usar ele pra identificar o usuário
            $_SESSION['usuario_cpf'] = $usuario['cpf'];
            $_SESSION['usuario_nome'] = $usuario['nome'];

            echo json_encode([
                'success' => true,
                'message' => 'Login realizado com sucesso!',
                'usuario' => [
                    'cpf' => $usuario['cpf'],
                    'nome' => $usuario['nome']
                ]
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Senha incorreta']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuário não encontrado']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erro ao acessar o banco: ' . $e->getMessage()]);
}
?>
