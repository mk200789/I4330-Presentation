'use strict';

angular.module('TShowTrack')
    .controller("tvController", function($scope, $http){

        $scope.apiKey = "81c31c875c9254ede8856d4ff0af2557";
        $scope.test = "Welcome to the TV section.";
        $scope.result = '';
        $scope.dates = [];

        $scope.init = function(){
        	//init() will initialize with the top 10 movies currently playing in now theater
        	$http.get('http://api.themoviedb.org/3/tv/airing_today?api_key='+$scope.apiKey).success(function(data){
        		angular.forEach(data, function(value,index){
        			
        			if (index == "results"){
        				$scope.result = value;
        			}
        			if (index == "dates"){
        				$scope.dates.push(value);
        			}
        		});      		
        	});
        };
       

});

