-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Feb 05, 2024 at 07:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grazitti`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `role` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 1,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`role`, `username`, `isAdmin`, `password`) VALUES
(0, 'admin', 1, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `role` int(11) NOT NULL DEFAULT 2,
  `emp_id` int(4) NOT NULL,
  `name` varchar(25) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `age` int(2) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `passwords` varchar(255) NOT NULL,
  `DOJ` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`role`, `emp_id`, `name`, `isAdmin`, `age`, `email`, `gender`, `passwords`, `DOJ`) VALUES
(0, 3, 'Krishna', 0, 25, 'krishna@grazitti.com', 'Male', '8854b47fc05990266cc6df7f69d1adeb', '2024-01-19 15:55:48'),
(0, 4, 'srishti', 0, 25, 'srishti@grazitti.com', 'Female', '35ff6f6f54f472346785e6c725ab29eb', '2024-01-19 15:56:36'),
(0, 39, 'Mahima', 0, 26, '\nmahima.aggarwal@grazitti.com', 'Female', '7948e9f69b6b386e50993eee73f60368', '2024-01-19 15:57:23'),
(0, 47, 'Harsh', 0, 30, 'Harsh@grazitti.com', 'Male', 'b0aa651c991deca550252ed6cbba99ba', '2024-01-19 15:57:55'),
(0, 52, 'Muskan', 0, 23, '\nmuskan.kapahi@grazitti.com', 'Female', 'fea0f6873f5658820fa58efd01479586', '2024-01-19 15:59:17'),
(0, 55, 'jatin', 0, 23, 'jatin.dhiman@grazitti.com', 'Male', 'cd5021c875e922a7efe4520f43ac5bbc', '2024-01-18 17:35:20'),
(0, 109, 'Rahul', 0, 25, 'rahul@grazitti.com', 'Male', '2acb7811397a5c3bea8cba57b0388b79', '2024-01-19 13:30:08');

-- --------------------------------------------------------

--
-- Table structure for table `emp_data`
--

CREATE TABLE `emp_data` (
  `emp_id` int(4) NOT NULL,
  `name` varchar(30) NOT NULL,
  `dept` varchar(50) NOT NULL,
  `salary` bigint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emp_data`
--

INSERT INTO `emp_data` (`emp_id`, `name`, `dept`, `salary`) VALUES
(1, 'jatin', 'Wev Dev', 20000),
(2, 'muskan', 'Wev Dev', 20000),
(3, 'Abhi', 'salesforce', 20000),
(4, 'sanjoli', 'MST', 20000),
(5, 'Harman', 'PM', 20000),
(6, 'rajwinder', 'salesforce', 20000),
(7, 'Harsh', 'Wev Dev', 50000),
(8, 'Mahima', 'Wev Dev', 30000),
(9, 'srishti', 'Wev Dev', 25000);

-- --------------------------------------------------------

--
-- Table structure for table `emp_feedback`
--

CREATE TABLE `emp_feedback` (
  `emp_id` int(11) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `website` varchar(100) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `gender` text NOT NULL,
  `DOC` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emp_feedback`
--

INSERT INTO `emp_feedback` (`emp_id`, `fname`, `email`, `website`, `comment`, `gender`, `DOC`) VALUES
(4, 'srishti', 'srishti@gmail.com', 'srishti.com', 'my name is srishti.', 'Female', '2024-01-02 16:29:40'),
(39, 'Mahima', 'Mahima@gmail.com', 'Mahima.com', 'My name is Mahima.', 'Female', '2024-01-09 18:55:09'),
(47, 'Harsh', 'harsh@gmail.com', 'harsh.com', 'My name is harsh.', 'Male', '2024-01-10 18:45:14'),
(52, 'Muskan', 'Muskan@gmial.com', 'Muskan.com', 'My name is Muskan.', 'Female', '2024-01-11 18:23:04'),
(55, 'jatin', 'jatin.dhiman@grazitti.com', 'jatin.com', 'My name is Jatin Dhiman.', 'Male', '2024-01-15 16:28:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `emp_data`
--
ALTER TABLE `emp_data`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `emp_feedback`
--
ALTER TABLE `emp_feedback`
  ADD PRIMARY KEY (`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `emp_data`
--
ALTER TABLE `emp_data`
  MODIFY `emp_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `emp_feedback`
--
ALTER TABLE `emp_feedback`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
