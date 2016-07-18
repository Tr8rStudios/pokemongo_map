CREATE TABLE `gyms` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE `pokestops` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;


CREATE TABLE `pokemon25` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;


CREATE TABLE `pokemon50` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;


CREATE TABLE `pokemon75` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;


CREATE TABLE `pokemon100` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE `pokemon125` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;

CREATE TABLE `pokemon150` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,    # Primary Key
  `name` VARCHAR( 60 ) NOT NULL ,                   # Name of Point
  `description` VARCHAR( 80 ) NOT NULL ,
  `lat` FLOAT( 10, 6 ) NOT NULL ,
  `lng` FLOAT( 10, 6 ) NOT NULL
) ENGINE = MYISAM ;