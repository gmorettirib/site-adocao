-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/10/2025 às 20:00
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
  `telefone` varchar(9) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `cpf` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
