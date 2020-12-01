<?php
	
	if (!defined('DS')) { define('DS', DIRECTORY_SEPARATOR);}

	define('ROOT', dirname(dirname(__DIR__)) . DS);
	
 	define('APP',   ROOT . 'application'   . DS);
	define('VIEW',  APP  . 'views'  . DS); 
	define('MODEL', APP  . 'models' . DS);
	define('CORE',  APP  . 'core'  . DS);
	define('LIB',   APP  . 'lib'   . DS);
	define('CONTROLLER',  APP . 'controllers'  . DS);
	
?>