
<?php
	define('DS', DIRECTORY_SEPARATOR);

	require_once __DIR__.DS.'application'.DS.'config'.DS.'conf.php';
	require_once CORE . 'application.php';
	require_once CORE . 'Controller.php';
	require_once CORE . 'Model.php';


	require_once VIEW.'layout/header.php';
	$dispatch = new Application();
	$dispatch -> dispatch();
	require_once VIEW.'layout/footer.php';

?>