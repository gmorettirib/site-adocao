<?php

include 'pedaco.php';
require 'conexao.php';

try {
    // Criar conexão PDO
    $pdo = new PDO("mysql:host=localhost;dbname=pet_database", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta SQL para pets com suas fotos
    $sql = "SELECT p.*, GROUP_CONCAT(pp.photo_path) as photos FROM pets p LEFT JOIN pet_photos pp ON p.id = pp.pet_id GROUP BY p.id";
    $stmt = $pdo->query($sql);
    $pets = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Pets</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">
    <div class="">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Pets</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <?php foreach ($pets as $pet): ?>
                    <a href="adotar.php?id=<?php echo $pet['id']; ?>" class="group" onclick="openModal(this.href); return false;">
                        <?php
                        $photoPaths = explode(',', $pet['photos'] ?? '');
                        $firstPhoto = !empty($photoPaths[0]) ? $photoPaths[0] : 'img/cachorro.png';
                        ?>
                        <img src="<?php echo htmlspecialchars($firstPhoto); ?>"
                            alt="Foto do pet"
                            class="w-full aspect-square object-cover rounded-xl hover:scale-105 transition-transform duration-300">

                        <h3 class="mt-4 text-sm text-gray-700"><?php echo htmlspecialchars($pet['nome']); ?></h3>
                        <p class="mt-1 text-lg font-medium text-gray-900"><?php echo htmlspecialchars($pet['tipo']); ?> - <?php echo htmlspecialchars($pet['raca']); ?></p>

                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <div class="mt-6 text-center">
        <a href="cadastro_pet.php"
            class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            Cadastrar Novo Pet
        </a>
    </div>

    <!-- Modal -->
    <div id="modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden z-50">
        <div class="relative p-5 border w-11/12 max-w-6xl h-[90vh] shadow-lg rounded-xl bg-white">
            <div class="h-full">
                <button id="closeModal" class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600 z-60">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <iframe id="modalIframe" class="w-full h-full" frameborder="0"></iframe>
            </div>
        </div>

        <script>
            function openModal(url) {
                document.getElementById('modalIframe').src = url;
                document.getElementById('modal').classList.remove('hidden');
            }

            document.getElementById('closeModal').addEventListener('click', function() {
                document.getElementById('modal').classList.add('hidden');
                document.getElementById('modalIframe').src = '';
            });

            document.getElementById('modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.add('hidden');
                    document.getElementById('modalIframe').src = '';
                }
            });
        </script>
</body>

</html>