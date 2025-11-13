<?php
include 'pedaco.php';
require 'conexao.php';

if (!isset($_GET['id'])) {
  die("ID do pet não fornecido.");
}

$id = $_GET['id'];

try {
  $pdo = new PDO("mysql:host=localhost;dbname=pet_database", "root", "");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Buscar dados do pet
  $sql = "SELECT * FROM pets WHERE id = ?";
  $stmt = $pdo->prepare($sql);
  $stmt->execute([$id]);
  $pet = $stmt->fetch(PDO::FETCH_ASSOC);

  if (!$pet) {
    die("Pet não encontrado.");
  }

  // Buscar fotos do pet
  $sqlPhotos = "SELECT photo_path FROM pet_photos WHERE pet_id = ?";
  $stmtPhotos = $pdo->prepare($sqlPhotos);
  $stmtPhotos->execute([$id]);
  $photos = $stmtPhotos->fetchAll(PDO::FETCH_COLUMN);
  if (empty($photos)) {
    $photos = ['img/cachorro.png']; // imagem padrão
  }
  $totalSlides = count($photos);
} catch (PDOException $e) {
  die("Erro: " . $e->getMessage());
}
?>
<div class="bg-white">
  <div class="pt-6">

    <!-- Imagens -->
    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          <?php echo htmlspecialchars($pet['nome']); ?>
        </h1>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 mt-6">
        <!-- Carrossel -->
        <div class="relative">
          <div class="carousel-container overflow-hidden rounded-lg">
            <div class="carousel-wrapper flex transition-transform duration-300 ease-in-out" id="carousel">
              <?php foreach ($photos as $index => $image): ?>
                <img src="<?php echo htmlspecialchars($image); ?>"
                  alt="Foto do pet <?php echo $index + 1; ?>"
                  class="carousel-slide w-full aspect-square object-cover flex-shrink-0" />
              <?php endforeach; ?>
            </div>
          </div>

          <!-- Botões -->
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200" id="prevBtn">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200" id="nextBtn">
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Pontos -->
          <div class="flex justify-center mt-4 space-x-2" id="dotsContainer">
            <?php for ($i = 0; $i < $totalSlides; $i++): ?>
              <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300" data-slide="<?php echo $i; ?>"></button>
            <?php endfor; ?>
          </div>
        </div>

        <!-- Informações -->
        <div class="py-10 lg:pt-6 lg:pr-8 lg:pb-16">
          <div>
            <p class="text-base text-gray-900 mb-4"><?php echo htmlspecialchars($pet['descricao']); ?></p>

            <ul class="list-disc space-y-2 pl-4 text-sm text-gray-600">
              <li>Tipo: <?php echo htmlspecialchars($pet['tipo']); ?></li>
              <li>Raça: <?php echo htmlspecialchars($pet['raca']); ?></li>
              <li>Cor: <?php echo htmlspecialchars($pet['cor']); ?></li>
              <li>Tamanho: <?php echo htmlspecialchars($pet['tamanho']); ?> cm</li>
              <li>Peso: <?php echo htmlspecialchars($pet['peso']); ?> kg</li>
              <li>Castrado: <?php echo htmlspecialchars($pet['castrado']); ?></li>
            </ul>
          </div>

          <div class="mt-10">
            <p class="text-sm text-gray-600">Este pet está disponível para adoção. Entre em contato para mais informações.</p>
          </div>

          <button class="mt-10 flex w-full items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700">
            Adotar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentIndex = 0;
  const totalSlides = <?php echo $totalSlides; ?>;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-gray-900', index === currentIndex);
      dot.classList.toggle('bg-gray-300', index !== currentIndex);
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
</script>

</html>