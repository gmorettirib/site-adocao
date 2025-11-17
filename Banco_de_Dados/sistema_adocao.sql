-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/11/2025 às 21:48
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistema_adocao`
--
CREATE DATABASE IF NOT EXISTS `sistema_adocao` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sistema_adocao`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `animal`
--

CREATE TABLE `animal` (
  `id_animal` int(11) NOT NULL,
  `cor` varchar(255) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `tamanho` int(11) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `favorito` tinyint(1) DEFAULT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `id_status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `interage`
--

CREATE TABLE `interage` (
  `cpf` varchar(11) DEFAULT NULL,
  `id_animal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `raca`
--

CREATE TABLE `raca` (
  `id_raca` int(11) NOT NULL,
  `raca_descricao` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `status`
--

CREATE TABLE `status` (
  `sem_dono` tinyint(1) DEFAULT NULL,
  `adotado` tinyint(1) DEFAULT NULL,
  `id_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo`
--

CREATE TABLE `tipo` (
  `id_tipo` int(11) NOT NULL,
  `tipo_descricao` varchar(255) DEFAULT NULL,
  `id_raca` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `qtd_anim_registado` int(11) DEFAULT NULL,
  `qtd_adotados` int(11) DEFAULT NULL,
  `data_nasc` date DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `telefone` varchar(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`qtd_anim_registado`, `qtd_adotados`, `data_nasc`, `nome`, `cep`, `telefone`, `email`, `cpf`, `senha`) VALUES
(NULL, NULL, '2025-11-25', 'Joazinho', '77777777', '777777777', 'teste@gmail.com', '00000000000', '$2y$10$nTTnQkrODFqyZD.7ndLwFuv4hYtafiGeM0F9AE3ifmeB1XfZBhk82'),
(NULL, NULL, '1969-04-26', 'Maria Aparecida Diogo', '09380330', '119606484', 'Cida@gmail.com', '10770225810', '$2y$10$AOLYG5pSAzftOwWNk1ePueJ9TWTuLSYmW72aUCLBboY1LIEqPPgU6'),
(NULL, NULL, '2025-10-29', 'joazin', '12312312', '23123123213', 'jao@gmail.com', '12312312312', '$2y$10$oUBhhCGb0pXGRKXIEscwbO.yjjvcaOS/QvF5MihTwhnCP9gTsNsOW'),
(NULL, NULL, '2025-10-07', 'Daniel Diogo De Souza', '123312', '119800042', 'dan.diogosouza765@gmail.com', '12345678910', '$2y$10$8c1pqH4ZwZBa.lIBWXAX8uDWA'),
(NULL, NULL, '2025-09-29', 'maria', '09371000', '119100020', 'maria@gmail.com', '12345678980', '$2y$10$0DKBKgA3APt7Lj3qemgDmej7U'),
(NULL, NULL, '2025-10-01', 'Felipe', '09371000', '119767547', 'fefe@gmail.com', '42398023850', '$2y$10$RsZvZX4FBk0JWhr6EKpMteDtJ'),
(NULL, NULL, '2025-10-02', 'Daniel', '00000000', '111111111', 'daniel@gmail.com', '44444444444', '$2y$10$gijeIbsrSMpnxzV2XsCVDOgHdCY7w0ExgC8WSFSJ/PZu57nzSfM02'),
(NULL, NULL, '2007-04-12', 'Joao Vitor Macedo Goncalves', '00000001', '195852431', 'joao21@gmail.com', '55555555555', '$2y$10$Rs8SsPOYlqmh.7EGWqOwjOPagRn11g5FUWAThzKrXoPeRCsIs8Eha'),
(NULL, NULL, '2025-10-01', 'lucas', '55555555', '777777777', 'lucas@gmail.com', '88888888888', '$2y$10$8SHfLyWwC/lcngEurV6LwOoLl89TFU700auSzuGTNABTOG5Uvq8dm');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vacinacao_castracao`
--

CREATE TABLE `vacinacao_castracao` (
  `vacinas` varchar(255) DEFAULT NULL,
  `id_vacinacao` int(11) DEFAULT NULL,
  `id_animal` int(11) DEFAULT NULL,
  `castrado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id_animal`),
  ADD KEY `id_tipo` (`id_tipo`),
  ADD KEY `id_status` (`id_status`);

--
-- Índices de tabela `interage`
--
ALTER TABLE `interage`
  ADD KEY `cpf` (`cpf`),
  ADD KEY `id_animal` (`id_animal`);

--
-- Índices de tabela `raca`
--
ALTER TABLE `raca`
  ADD PRIMARY KEY (`id_raca`);

--
-- Índices de tabela `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Índices de tabela `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`id_tipo`),
  ADD KEY `id_raca` (`id_raca`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cpf`);

--
-- Índices de tabela `vacinacao_castracao`
--
ALTER TABLE `vacinacao_castracao`
  ADD KEY `id_animal` (`id_animal`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id_tipo`),
  ADD CONSTRAINT `animal_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);

--
-- Restrições para tabelas `interage`
--
ALTER TABLE `interage`
  ADD CONSTRAINT `interage_ibfk_1` FOREIGN KEY (`cpf`) REFERENCES `usuario` (`cpf`),
  ADD CONSTRAINT `interage_ibfk_2` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`);

--
-- Restrições para tabelas `tipo`
--
ALTER TABLE `tipo`
  ADD CONSTRAINT `tipo_ibfk_1` FOREIGN KEY (`id_raca`) REFERENCES `raca` (`id_raca`);

--
-- Restrições para tabelas `vacinacao_castracao`
--
ALTER TABLE `vacinacao_castracao`
  ADD CONSTRAINT `vacinacao_castracao_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animal` (`id_animal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
