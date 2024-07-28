-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2024 a las 04:03:34
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas-series`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datospeliculas`
--

CREATE TABLE `datospeliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `año` varchar(100) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `caratula` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `trailer` text NOT NULL,
  `estado` varchar(100) NOT NULL,
  `plataforma` varchar(255) NOT NULL,
  `idioma` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `datospeliculas`
--

INSERT INTO `datospeliculas` (`id`, `titulo`, `genero`, `año`, `banner`, `caratula`, `descripcion`, `trailer`, `estado`, `plataforma`, `idioma`) VALUES
(1, 'The Boys', 'Acción & Aventura, Ciencia ficción', '2019', '/the-boys/banner/the-boys-banner.jpg', '/the-boys/caratula/1.jpg', 'THE BOYS es una mirada irreverente sobre la idea de qué sucedería si los superhéroes, quienes son tan populares como las celebridades, más influyentes que los políticos y venerados como dioses, abusaran de sus poderes en vez de dedicarse a hacer el bien. En The Boys, veremos a los normales luchar contra los superpoderosos para exponer la verdad sobre \"Los siete\" y el formidable Vought.', 'https://www.youtube.com/embed/RzDdLdM59kw?si=4g6erxrqLmvJG0F7', 'En emisión', '/plataforma/prime.png', 'Inglés'),
(2, 'Betty la fea 2', 'Comedia', '2024', '/betty/banner/betty-banner.jpg', '/betty/caratula/2.jpg', 'Hace dos años que Betty ya no convive con Armando, pues encontrarlo en una situación comprometedora con Marcela revivió en ella traumas del pasado. Está entusiasmada por el regreso de su hija Mila, y aunque intenta remediar su vínculo con ella, presiones en Ecomoda y enemigos del pasado harán lo posible por sacarla de la vida de su hija y también de la de Armando, quien no ha dejado de amarla.', 'https://www.youtube.com/embed/l_u9cmkxe_M?si=watz9jKGI1Nv885G', 'En emisión', '/plataforma/prime.png', 'Español Castellano'),
(3, 'Arcane', 'Animación, Drama, Ciencia Ficción', '2021', '/arcane/banner/arcane-banner.webp', '/arcane/caratula/arcane.jpg', 'Mientras la discordia separa las ciudades gemelas de Piltóver y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologías mágicas y convicciones opuestas.', 'https://www.youtube.com/embed/xPKN7MxS8TU?si=x2K80XkXPw1s3B4f', 'En emisión', '/plataforma/netflix.png', 'Inglés');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datospeliculas`
--
ALTER TABLE `datospeliculas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datospeliculas`
--
ALTER TABLE `datospeliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
