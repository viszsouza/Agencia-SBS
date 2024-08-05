<?php
$servername = "localhost";
$username = "u921588822_agenciasbs";
$password = "agenciaSBS2024!";
$dbname = "u921588822_leads_site";

// Criar a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Capturar dados do formulário
$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

// Preparar e executar a inserção
$sql = "INSERT INTO dados (nome, email, telefone) VALUES ('$nome', '$email', '$telefone')";
$stmt = $conn->prepare($sql);


if ($stmt->execute()) {
    echo "Registro inserido com sucesso!";
    // Redireciona para o link desejado
    header('Location: agenciastepbystep.com/obrigado.html');
} else {
    echo "Erro ao inserir registro: " . $stmt->error;
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>