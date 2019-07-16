DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE  burgers_db;

CREATE TABLE burgers (
	item_id INTEGER AUTO_INCREMENT NOT NULL,

    burger_name VARCHAR(100),

    devoured BOOLEAN DEFAULT false,
    
    PRIMARY KEY (item_id)
);

SELECT * FROM burgers_db;
