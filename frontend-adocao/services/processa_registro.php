<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
include_once 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Recebe dados do formulário
$nome = trim($_POST['nome'] ?? '');
$senha = $_POST['senha'] ?? '';
$email = trim($_POST['email'] ?? '');
$data_nascimento = $_POST['data'] ?? '';
$cpf = preg_replace('/\D/', '', $_POST['cpf'] ?? '');
$telefone = preg_replace('/\D/', '', $_POST['telefone'] ?? '');
$cep = preg_replace('/\D/', '', $_POST['cep'] ?? '');

// Validação básica
if (empty($nome) || empty($senha) || empty($email) || empty($cpf) || empty($telefone) || empty($cep) || empty($data_nascimento)) {
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos obrigatórios!']);
    exit;
}

try {
    // Verifica se CPF ou Email já existem
    $stmt = $pdo->prepare("SELECT cpf FROM usuario WHERE cpf = :cpf OR email = :email LIMIT 1");
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->fetch()) {
        echo json_encode(['success' => false, 'message' => 'CPF ou Email já cadastrado']);
        exit;
    }

    // Criptografa a senha
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    // Insere no banco
    $sql = "INSERT INTO usuario (nome, senha, email, data_nasc, cpf, telefone, cep) 
            VALUES (:nome, :senha, :email, :data_nasc, :cpf, :telefone, :cep)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':senha', $senha_hash);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':data_nasc', $data_nascimento);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':cep', $cep);
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Cadastro realizado com sucesso!']);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Erro ao acessar o banco: ' . $e->getMessage()]);
}
?>