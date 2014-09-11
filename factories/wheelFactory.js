carApp.factory('wheelFactory',function(){
	var wheels = [
		{
			id: "wheel1",
			make : "Wheel 1",
			model : "W1",
			category : "touring",
			use : "unloaded",
			maxWeight : 300,
			size : "700c",
			material :"alloy",
			tireType : "tubular",
			color : "black",
			price : 75.99,
			strength : 10

		},

		{
			id: "wheel2",
			make : "Wheel 2",
			model : "W2",
			category : "racing",
			use : "loaded",
			maxWeight : 280,
			size : '26"',
			material :"aluminum",
			tireType : "clincher",
			color : "blue",
			price : 99.99,
			strength : 8

		},
	];
									
	var factory = {};

	factory.getWheels = function(){
		//create and fill an array out of my car object to play...this is the object I will be
		//utilizing the most in the app
		return wheels;
	};

	return factory;
});