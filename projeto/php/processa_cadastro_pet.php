<?php
include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"] ?? "";
    $descricao = $_POST["descricao"] ?? "";
    $cor = $_POST["cor"] ?? "";
    $tamanho = $_POST["tamanho"] ?? "";
    $peso = $_POST["peso"] ?? "";
    $castrado = $_POST["castrado"] ?? "nao";
    $vacinas = $_POST["vacinas"] ?? "";
    $tipo = $_POST["tipo"] ?? "";
    $raca = $_POST["raca"] ?? "";
    $id_usuario = 1;  


    

   
    $foto = "";
    if (isset($_FILES["foto"]) && $_FILES["foto"]["error"] === 0) {
        $nomeArquivo = uniqid() . "_" . basename($_FILES["foto"]["name"]);
        $destino = "uploads/" . $nomeArquivo;

        if (move_uploaded_file($_FILES["foto"]["tmp_name"], $destino)) {
            $foto = $destino;
        } else {
            echo "Erro ao enviar a imagem.";
            exit;
        }
    }

    try {
        $sql = "INSERT INTO animal 
                (nome, descricao, cor, tamanho, peso, castrado, vacinas, tipo, raca, foto, id_usuario)
                VALUES 
                (:nome, :descricao, :cor, :tamanho, :peso, :castrado, :vacinas, :tipo, :raca, :foto, :id_usuario)";

        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":nome", $nome);
        $stmt->bindParam(":descricao", $descricao);
        $stmt->bindParam(":cor", $cor);
        $stmt->bindParam(":tamanho", $tamanho);
        $stmt->bindParam(":peso", $peso);
        $stmt->bindParam(":castrado", $castrado);
        $stmt->bindParam(":vacinas", $vacinas);
        $stmt->bindParam(":tipo", $tipo);
        $stmt->bindParam(":raca", $raca);
        $stmt->bindParam(":foto", $foto);
        $stmt->bindParam(":id_usuario", $id_usuario);

        $stmt->execute();

        echo "Pet cadastrado com sucesso!";
    } catch (PDOException $e) {
        echo "Erro ao cadastrar pet: " . $e->getMessage();
    }
}
?>
