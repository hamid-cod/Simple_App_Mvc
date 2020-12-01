<?php
	
	class homeController extends Controller{

		public function index() {
			$this->getModel();
			$this->getView();
		}

		public function aboutUs() {
			$this->getModel();
			$this->getView();
		}

		public function contact() {
			$this->getModel();
			$this->getView();
		}
	}

?>