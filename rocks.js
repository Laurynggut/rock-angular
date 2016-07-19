(function(){
	var app = angular.module('Rocks',[]);
	app.directive("indexDirective",function(){// hemos contruido nuestra directiva
		return{
			restrict:"E",
			templateUrl:"card.html"             //template:"<h1>{{band.name}}</h1>"//cogeremos todos los nombres de los grupos del array de json.vamos cambiando segun el avance del ejercicio
		}
	});

	app.controller('IndexController',['$scope','$http',function($scope,$http){
		
		$scope.name = "AngularJS"
		var url = "data/bands.json";//netpoint
		$http.get(url).then(function(response){//get PETICION por ajax, then es success
		$scope.bands = response.data;
		
	})
	}]);

}())//primer ( y los dos ultimos() es como un document.ready en jquery



/*var getBands = function(responsive){
	$scope.bands = response.data;

}*/