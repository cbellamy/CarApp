carApp.factory('carFactory',function(){
	var cars = {
			"car1-1234" : {
				make : "BMW",
				model : "M5",
				image: "http://media.ed.edmunds-media.com/bmw/m5/2014/oem/2014_bmw_m5_sedan_base_rq_oem_2_500.jpg",
				timesBought: 0,
				timesLeased:0,
				timesDumped:0
			},

			"car2-5678" : {
				make : "Subaru",
				model : "WRX STI",
				image : "http://media.ed.edmunds-media.com/subaru/impreza-wrx/2013/oem/2013_subaru_impreza-wrx_4dr-hatchback_sti_fq_oem_1_500.jpg",
				timesBought: 0,
				timesLeased:0,
				timesDumped:0
			},

			"car3-9012" : {
				make : "Nissan",
				model : "GT-R",
				image : "http://media.ed.edmunds-media.com/nissan/gt-r/2014/oem/2014_nissan_gt-r_coupe_track-edition_fq_oem_1_500.jpg",
				timesBought: 0,
				timesLeased:0,
				timesDumped:0
			}						
	};

	var factory = {};

	factory.getCars = function(){
		//create and fill an array out of my car object to play...this is the object I will be
		//utilizing the most in the app
		var carArray = [];

		Object.keys(cars).forEach(function(key){
			var car = cars[key];
			obj = {
				carID:key,
				make:car.make,
				model:car.model,
				image:car.image,
				timesBought:car.timesBought,
				timesLeased:car.timesLeased,
				timesDumped:car.timesDumped
			};
			carArray.push(obj);
		});
		return carArray;
	};

	return factory;
});
