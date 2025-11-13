<?php
include 'pedaco.php';
require 'conexao.php';

// Cria tabela de fotos se não existir
$conn = new mysqli("localhost", "root", "", "pet_database");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->query("CREATE TABLE IF NOT EXISTS pet_photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT NOT NULL,
    photo_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
)");
$conn->close();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "pet_database");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $cor = $_POST['cor'];
    $tamanho = $_POST['tamanho'];
    $peso = $_POST['peso'];
    $castrado = $_POST['castrado'];
    $detalhes_castracao = $_POST['detalhes_castracao'];
    $tipo = $_POST['tipo'];
    $raca = $_POST['raca'];

    // Insere o pet
    $sql = "INSERT INTO pets (nome, descricao, cor, tamanho, peso, castrado, detalhes_castracao, tipo, raca)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssddssss", $nome, $descricao, $cor, $tamanho, $peso, $castrado, $detalhes_castracao, $tipo, $raca);

    if ($stmt->execute()) {
        $pet_id = $stmt->insert_id; // pega o ID do pet recém-criado

        // Upload de múltiplas fotos
        $target_dir = "img/";
        $uploadOk = true;

        foreach ($_FILES["fotos"]["tmp_name"] as $key => $tmp_name) {
            $file_name = basename($_FILES["fotos"]["name"][$key]);
            $target_file = $target_dir . $file_name;

            if (move_uploaded_file($tmp_name, $target_file)) {
                // insere a foto na tabela pet_photos
                $sql_photo = "INSERT INTO pet_photos (pet_id, photo_path) VALUES (?, ?)";
                $stmt_photo = $conn->prepare($sql_photo);
                $stmt_photo->bind_param("is", $pet_id, $target_file);
                $stmt_photo->execute();
                $stmt_photo->close();
            } else {
                $uploadOk = false;
            }
        }

        $mensagem = $uploadOk ? "Pet e fotos cadastrados com sucesso!" : "Pet cadastrado, mas houve erro ao enviar alguma foto.";
        if ($uploadOk) {
            header("Location: animais.php");
            exit;
        }
    } else {
        $mensagem = "Erro ao cadastrar pet: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>




<?php if (isset($mensagem)): ?>
    <div class="max-w-4xl mx-auto mt-4 p-4 bg-purple-100 text-purple-900 rounded-md">
        <?php echo $mensagem; ?>
    </div>
<?php endif; ?>

<section class="max-w-4xl mx-auto mt-12 bg-purple-700/90 p-8 rounded-2xl shadow-xl">
    <h1 class="text-3xl font-bold text-purple-200 mb-8">FICHA DO PET!</h1>

    <form class="space-y-6" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block font-semibold mb-1">Nome (do pet):</label>
                <input type="text" name="nome" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
            <div>
                <label class="block font-semibold mb-1">Descrição:</label>
                <input type="text" name="descricao" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div>
                <label class="block font-semibold mb-1">Cor:</label>
                <input type="text" name="cor" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
            <div>
                <label class="block font-semibold mb-1">Tamanho (cm):</label>
                <input type="number" name="tamanho" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
            <div>
                <label class="block font-semibold mb-1">Peso:</label>
                <input type="number" name="peso" step="0.01" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 items-center">
            <div>
                <label class="block font-semibold mb-1">Castrado?</label>
                <div class="flex gap-3">
                    <label class="flex items-center gap-1">
                        <input type="radio" name="castrado" value="nao" required /> Não
                    </label>
                    <label class="flex items-center gap-1">
                        <input type="radio" name="castrado" value="sim" required /> Sim
                    </label>
                </div>
            </div>
            <div class="col-span-2">
                <label class="block font-semibold mb-1">Se sim, quais?</label>
                <input type="text" name="detalhes_castracao"
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block font-semibold mb-1">Tipo:</label>
                <input type="text" name="tipo" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
            <div>
                <label class="block font-semibold mb-1">Raça:</label>
                <input type="text" name="raca" required
                    class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            </div>
        </div>

        <div>
            <label class="block font-semibold mb-1">Fotos do Pet:</label>
            <input type="file" name="fotos[]" accept="image/*" multiple required
                class="w-full rounded-md p-2 text-gray-800 focus:outline-none" />
            <p class="text-sm text-purple-200 mt-1">Você pode selecionar várias fotos segurando Ctrl (ou ⌘ no Mac).</p>

        </div>

        <div class="flex justify-end">
            <button type="submit"
                class="bg-purple-300 hover:bg-purple-400 text-purple-900 font-semibold px-6 py-2 rounded-full transition">
                CADASTRAR PET
            </button>
        </div>
    </form>
</section>
</body>

</html>