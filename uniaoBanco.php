<?php

define('HOST', 'localhost');
define ('USER', 'root');
define ('PASS', '');
define ('DBNAME', 'BrinquedoteaILDA');

$conex = new PDO ('mysql:host='. HOST . ';dbname=' . DBNAME . ';' . USER, PASS);

