--
-- Database: `educom_db`
--

CREATE DATABASE IF NOT EXISTS `educom_db`;
USE `educom_db`;


-- ENTITIES

--
-- Struttura della tabella `address`
--

CREATE TABLE IF NOT EXISTS `address` (
	`Country` numeric ,
	`Village` varchar(130)  NOT NULL,
	`district` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `attendance`
--

CREATE TABLE IF NOT EXISTS `attendance` (
	`date` date ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `class`
--

CREATE TABLE IF NOT EXISTS `class` (
	`classCode` varchar(130) ,
	`className` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
	`RefFirstPhoneNo` varchar(130) ,
	`firstPhoneNo` varchar(130) ,
	`secondPhoneNo` varchar(130) ,
	`socialMedia` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `marks`
--

CREATE TABLE IF NOT EXISTS `marks` (
	`comment` varchar(130) ,
	`value` numeric ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `parent`
--

CREATE TABLE IF NOT EXISTS `parent` (
	`address` varchar(130) ,
	`contact` varchar(130) ,
	`email` varchar(130) ,
	`firstName` varchar(130) ,
	`gender` varchar(130) ,
	`lastName` varchar(130) ,
	`nin` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `reportcard`
--

CREATE TABLE IF NOT EXISTS `reportcard` (
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `school`
--

CREATE TABLE IF NOT EXISTS `school` (
	`schoolName` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`address` varchar(30) ,
	`contact` varchar(30) ,
	`dob` date ,
	`email` varchar(130) ,
	`firstName` varchar(130) ,
	`gender` varchar(130) ,
	`lastName` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
	`subjectCode` varchar(130) ,
	`subjectName` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `teacher`
--

CREATE TABLE IF NOT EXISTS `teacher` (
	`address` varchar(30) ,
	`administration` varchar(30) ,
	`contact` varchar(30) ,
	`dob` date ,
	`email` varchar(130) ,
	`firstName` varchar(130) ,
	`gender` varchar(130) ,
	`lastName` varchar(130) ,
	`nin` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `educom_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `educom_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation 1:m classSubject Class - Subject
ALTER TABLE `class` ADD COLUMN `classSubject` int(11)  REFERENCES subject(_id);

-- relation 1:m subjectId Teacher - Subject
ALTER TABLE `teacher` ADD COLUMN `subjectId` int(11)  REFERENCES subject(_id);


