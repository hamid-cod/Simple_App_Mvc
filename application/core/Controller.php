<?php 

	class Controller {

		protected $controller = 'home';
	   protected $action = 'index';
	   protected $params = [];
	 
	   public function getView() {
	   	$view_file = VIEW . $this->controller . DS . $this->action . '.php';
	   	if (file_exists($view_file)) {
	   		require_once $view_file;
	   	}
	   	else {
	   		require_once VIEW.'layout'.DS.'notfound.php';
	   	}
	   }

	   public function getModel() {
	   	$modelClass = $this->controller . 'Model';

	   	$model_file = MODEL . $modelClass . '.php';
	   	if (file_exists($model_file)) {
	   		require_once $model_file;
	   		if (class_exists($modelClass)) {
	   			$modelClass = new $modelClass();
	   			if (method_exists($modelClass, $this->action)) {
	      			call_user_func_array([$modelClass, $this->action], $this->params);
	   			}
	   			else { echo 'Method '. $this->action .'in Class '. $modelClass .' not found !';}
	   		}
	   		else { echo 'Class '. $modelClass .' not found !';}
	   	}
	   	else { echo 'File model '. $this->controller .'.php not found !';}	
	   }

	   public function setController($controller){
			$this->controller = $controller;
			return $this;
    	}
    	public function setAction($action){
			$this->action = $action;
			return $this;
    	}
    	public function setParams($params){
			$this->params = $params;
			return $this;
    	}
   }
?>