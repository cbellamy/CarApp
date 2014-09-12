carApp.controller('wheelController',function($scope,wheelFactory){

	//sets up application
	if(typeof $scope.wheels === 'undefined'){
		init();
	}

	//basic initialization function
	function init(){

		//simulating a firebase data store for car objects
		$scope.wheels = wheelFactory.getWheels();

		$scope.predicate = "make";

		$scope.searchText = {};
		
		//return $scope;

	}

});