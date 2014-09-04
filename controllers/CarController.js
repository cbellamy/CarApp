carApp.controller('CarController',function($scope,CarFactory){

	//sets up application
	if(typeof $scope.cars === 'undefined'){
		init();
	}
	
	//handles the buy, lease or dump button clicks
	$scope.chooseAction = function(index,action){
		//validate the action
		if($scope.actions.indexOf(action) === -1){
			alert("Action "+action+" not found!");
		}else{
			if(typeof $scope.cars[index] === 'object'){
				handleAction(action,index);
				showNextCar();
			}
		}
	}

	//responsible for populating the car Array objects with the number of times
	//each action is chosen per car
	function handleAction(action,index){
		$scope.cars[index].action=action;

		switch(action) {
		    case "Buy":
		        $scope.cars[index].timesBought++;
		        break;
		    case "Lease":
		        $scope.cars[index].timesLeased++;
		        break;
		    case "Dump":
		    	$scope.cars[index].timesDumped++;
		    default:
		        break;
		}
	}

	//picks a random car and shows the image, tries never to show the same image back to back
	function showNextCar(){

		var previousCarIndex = typeof $scope.currentCarIndex === "undefined" ? -1 : $scope.currentCarIndex;

		do {
			$scope.currentCarIndex = getRandomIndex($scope.cars);
		}
		while (previousCarIndex === $scope.currentCarIndex);

		$scope.currentCar = $scope.cars[$scope.currentCarIndex];

		$scope.backgroundImage = {'background-image': 'url('+$scope.currentCar.image+')'};

	}

	//get a random index number based on array length
	function getRandomIndex(arr){
		var myNum = Math.round(Math.random() * arr.length) - 1;
		return myNum > -0 ? myNum : 0;
	}


	//basic initialization function
	function init(){

		//simulating a firebase data store for car objects
		$scope.cars = CarFactory.getCars();

		$scope.actions = ['Buy','Lease','Dump'];

		$scope.predicate = "make";

		showNextCar();
		
		return $scope;

	}


});