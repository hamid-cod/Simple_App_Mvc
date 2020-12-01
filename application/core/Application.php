<?php

	class Application {

		protected $root;
		protected $controller = 'home';
	   protected $action = 'index';
	   protected $params = [];

	   public function __construct(){
	      $this->prepareURL();
	   }

	   protected function prepareURL () {
	   	$url = explode('/', trim($_SERVER['REQUEST_URI'], '/'), 4);

	   	if (isset($url[0]) && $url[0] != '') {
				$this->root = $url[0]; // Simple_App_Mvc
			}
			if (isset($url[1]) && $url[1] != '') {
				$this->controller = $url[1];
			}
			if (isset($url[2]) && $url[2] != '') {
				$this->action = $url[2];
			}
			if (isset($url[3]) && $url[3] != '') {
				$this->params = explode('/',$url[3]);
			}
	   }

	   public function dispatch() {
	   	$controllerClass = $this->controller . 'Controller';
	   	$controller_file = CONTROLLER . $controllerClass . '.php';
	   	if (file_exists($controller_file)) {
	      	require_once $controller_file;

	      	$controllerClass = new $controllerClass();
	      	$controllerClass-> setController($this->controller);
	      	$controllerClass-> setAction($this->action);
	      	$controllerClass-> setParams($this->params);

	      	if (method_exists($controllerClass, $this->action)) {
	      		call_user_func_array([$controllerClass, $this->action], $this->params);
	      	}
	      	else { require_once VIEW.'layout'.DS.'notfound.php'; }
	      }
	      else { require_once VIEW.'layout'.DS.'notfound.php'; }
	   }
	}

?>