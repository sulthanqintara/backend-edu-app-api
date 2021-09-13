-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2021 at 06:04 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eduapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `active_token`
--

CREATE TABLE `active_token` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `time_issued` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `active_token`
--

INSERT INTO `active_token` (`id`, `token`, `time_issued`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTMzMTYwMywiZXhwIjoxNjMxMzMyMjAzLCJpc3MiOiJBcmthZGVteSJ9.kBKPR8PQZ7p_aFFq8JGk-9Cyb2kmryadpG1wg9jG0jU', 2147483647),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTMzMTY0NCwiZXhwIjoxNjMxMzMyMjQ0LCJpc3MiOiJBcmthZGVteSJ9.OzCiets8EmQfTTEJ7Oo1Tz3C7PDaM45-b-FjpSUtLWc', 2147483647),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTMzMTY5OSwiZXhwIjoxNjMxMzMyMjk5LCJpc3MiOiJBcmthZGVteSJ9.h1uarTWXOIq1Sm-gKqe-hhxwyKZjjZmXNXTuHMcjVOc', 2147483647),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTMzMTc4MCwiZXhwIjoxNjMxMzMyMzgwLCJpc3MiOiJBcmthZGVteSJ9.j_MkraiQveYH9nh2K2v2UYop7xs_Xu7SM4r0Sl0x1Ok', 2147483647),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmVybGlhbiIsImVtYWlsIjoiYmVybGlhbnN0ckBnbWFpbC5jb20iLCJyb2xlX2lkIjoyLCJpYXQiOjE2MzEzMzIxMjAsImV4cCI6MTYzMTMzMjcyMCwiaXNzIjoiQXJrYWRlbXkifQ.ISaR4IXqow2QYc_99BQM8BF6_UqTjCgnCMgKeLRqfrw', 2147483647),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmVybGlhbiIsImVtYWlsIjoiYmVybGlhbnN0ckBnbWFpbC5jb20iLCJyb2xlX2lkIjoyLCJpYXQiOjE2MzEzMzIyMDAsImV4cCI6MTYzMTMzMjgwMCwiaXNzIjoiQXJrYWRlbXkifQ.ackJd5WwHef9WdMp7Z30rVtqUoLyeReaaudWszbcGVo', 2147483647),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTQzMTkwNywiZXhwIjoxNjMxNDMyNTA3LCJpc3MiOiJBcmthZGVteSJ9.gd8G_QWNX4PxlWDSDii_FLTfSNMdwRsDEdlVuJ17dmQ', 2147483647),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTQzMjAyMywiZXhwIjoxNjMxNDMyNjIzLCJpc3MiOiJBcmthZGVteSJ9.3LN8i-vqy2eN9KrFqRQMDr7GnLmrYw48zn4HCiz0RsE', 2147483647),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTQzMjI1NiwiZXhwIjoxNjMxNDMyODU2LCJpc3MiOiJBcmthZGVteSJ9.pkXOjoXw8Ot-0wD4tpcAkVfR3idRItBXu-d2r3PCgxE', 2147483647),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTQzODQ4OSwiZXhwIjoxNjMxNDM5MDg5LCJpc3MiOiJBcmthZGVteSJ9.DvfxfhBOmLbpI0H-ynHSSx6ct1MmbGymJ2Yf4Vurbyk', 2147483647),
(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIiLCJlbWFpbCI6ImFrYmFyMTIzQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTUyNTEzNSwiZXhwIjoxNjMxNTI1NzM1LCJpc3MiOiJBcmthZGVteSJ9.OCCLuHXtqYWbhm_qvlBXzDLGWs54Fq2-HdZE-2eAKRg', 1631525135044),
(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIgUiIsImVtYWlsIjoiYWtiYXIxMjM0QGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTUyNzIxNSwiZXhwIjoxNjMxNTI3ODE1LCJpc3MiOiJBcmthZGVteSJ9.w2xJmJSuKm0RJFb41H0jOlrEE8ncCh4pP6brdDpiY-c', 1631527215627),
(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIgUiIsImVtYWlsIjoiYWtiYXIxMjM0QGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTUyNzIyNSwiZXhwIjoxNjMxNTI3ODI1LCJpc3MiOiJBcmthZGVteSJ9.Z6jpUOKvsrwcEgr9MLIErpHpV17uqfAcuxnmNalgwlk', 1631527225526),
(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWtiYXIgUiIsImVtYWlsIjoiYWtiYXIxMjM0QGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTYzMTUzOTM5MiwiZXhwIjoxNjMxNTM5OTkyLCJpc3MiOiJBcmthZGVteSJ9.y6iNiCRRDIm02jyADEmBWVcfFhxYsB5Lf4zpqE9fcRE', 1631539392920);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Software'),
(2, 'History'),
(3, 'Psychology'),
(4, 'Finance'),
(5, 'Math');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `pricing` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `facilitator_id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `start_date`, `end_date`, `category_id`, `description`, `level_id`, `pricing`, `status_id`, `facilitator_id`, `image`) VALUES
(2, 'Introduction to HTML', '2021-10-17', '2021-11-21', 1, 'This introductory course is beneficial for those who want to get started on Web Development.', 1, 10, 0, 3, ''),
(4, 'Introduction to Game Development', '2021-09-13', '2021-10-25', 1, 'This course will cover an introduction to Unity, C#, and things related to game development.', 1, 10, 1, 3, ''),
(5, 'Introduction to Python', '2021-10-17', '2021-11-14', 1, 'This is description for Python', 1, 10, 0, 3, ''),
(6, 'Introduction to Economics', '2021-10-17', '2021-10-31', 4, 'This is description for Economics', 1, 10, 0, 3, ''),
(7, 'Intermediate Trigonometry', '2021-10-23', '2021-12-11', 5, 'Description for Intermediate Trigonometry', 2, 0, 0, 3, '/images/1631337396870-image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `forgot_password`
--

CREATE TABLE `forgot_password` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `code` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `name`) VALUES
(1, 'Beginner'),
(2, 'Intermediate'),
(3, 'Advanced');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Facilitator'),
(2, 'Student');

-- --------------------------------------------------------

--
-- Table structure for table `scoring`
--

CREATE TABLE `scoring` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scoring`
--

INSERT INTO `scoring` (`id`, `user_id`, `subject_id`, `score`, `status_id`) VALUES
(1, 6, 5, 80, 2),
(2, 6, 6, 80, 2),
(3, 6, 7, 55, 3),
(4, 6, 8, 50, 3),
(5, 6, 9, 100, 2),
(6, 6, 10, 70, 3);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Ongoing'),
(2, 'Completed'),
(3, 'Unfinished');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `subject_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `subject_date`, `start_time`, `end_time`, `class_id`) VALUES
(5, 'Basic HTML', '2021-10-17', '08:40:00', '10:00:00', 2),
(6, 'Basic CSS', '2021-10-24', '08:40:00', '10:00:00', 2),
(7, 'Basic JavaScript', '2021-10-31', '08:40:00', '10:00:00', 2),
(8, 'Static Web Page with HTML/CSS/JavaScript', '2021-11-07', '08:40:00', '10:00:00', 2),
(9, 'Basic Database with SQL', '2021-11-14', '08:40:00', '10:00:00', 2),
(10, 'Basic HTML Final Project', '2021-11-21', '08:40:00', '10:00:00', 2),
(12, 'Introduction to Game Development', '2021-09-13', '10:00:00', '11:30:00', 4),
(13, 'Introduction to Unity and C#', '2021-09-20', '10:00:00', '11:30:00', 4),
(14, 'Introduction to Artificial Intelligence', '2021-09-27', '10:00:00', '11:30:00', 4),
(15, 'Creating Simple Artificial Intelligence on a Game', '2021-10-04', '10:00:00', '11:30:00', 4),
(16, 'Creating Simple Artificial Intelligence on a Game 2', '2021-10-11', '10:00:00', '11:30:00', 4),
(17, 'Scenes on Game Development', '2021-10-18', '10:00:00', '11:30:00', 4),
(18, 'Game Development Final Project', '2021-10-25', '10:00:00', '11:30:00', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `phone` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `image`, `phone`, `role_id`) VALUES
(3, 'Akbar R', 'akbrrmdhn', 'akbar1234@gmail.com', '$2b$10$tBuiX7j5PWRdh8oM0pR6iO7Jzj1OZtDKeXn/Yahq1CvL07JuSzyd.', '/images/1631525150475-image.jpg', '081213810932', 1),
(4, 'Sulthan', 'msulthanq', 'msulthanq@gmail.com', '$2b$10$nWCWcAFTn37al/HmzRT0Wu4fje1fmA4uezvUfGFJlHAHstQ38ZJtu', '', '081234567890', 1),
(5, 'Berlian', 'berlianstr', 'berlianstr@gmail.com', '$2b$10$d4Sg3JyCk01IxnW.YDJ1a.n2Xo3dnOoqDqsEzb3il//IQ2eO5NPe6', '', '081298765432', 2),
(6, 'Candra', 'candrasdk', 'candrasdk@gmail.com', '$2b$10$8jBSWChWcs91QPJEq4z5AeI.AEwrMnyxZu/w/a5z2N0v.5TRe5oWG', '', '081211279812', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_class`
--

CREATE TABLE `user_class` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_class`
--

INSERT INTO `user_class` (`user_id`, `class_id`) VALUES
(5, 4),
(5, 2),
(6, 2),
(6, 4),
(6, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active_token`
--
ALTER TABLE `active_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`facilitator_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `level_id` (`level_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `forgot_password`
--
ALTER TABLE `forgot_password`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scoring`
--
ALTER TABLE `scoring`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `user_class`
--
ALTER TABLE `user_class`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `class_id` (`class_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active_token`
--
ALTER TABLE `active_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `forgot_password`
--
ALTER TABLE `forgot_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `scoring`
--
ALTER TABLE `scoring`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`facilitator_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `classes_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `classes_ibfk_3` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`);

--
-- Constraints for table `scoring`
--
ALTER TABLE `scoring`
  ADD CONSTRAINT `scoring_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `scoring_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `scoring_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `user_class`
--
ALTER TABLE `user_class`
  ADD CONSTRAINT `user_class_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_class_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
