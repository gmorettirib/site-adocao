<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "pet_database";

try {
    $conexao = new mysqli($host, $user, $password, $database);
    
    if ($conexao->connect_error) {
        throw new Exception("Erro na conexão: " . $conexao->connect_error);
    }
    
    $conexao->set_charset("utf8");
    
} catch (Exception $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>