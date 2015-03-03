'use strict';

angular.module('TShowTrack')
    .controller("mainMovController", ['$scope','$http', function($scope, $http){
    	
    	$scope.searchText = '';
    	$scope.genre = 'tv';
    	$scope.result = '';

    	$scope.search = function(){
    		if($scope.searchText != ''){

				$http.get("http://api.themoviedb.org/3/search/"+$scope.genre+"?api_key=81c31c875c9254ede8856d4ff0af2557&query="+$scope.searchText).success(function(data){
					angular.forEach(data, function(value, index){
						if (index == "results"){
							$scope.result = value;
						}
					});
				});
    		}
    		else{
    			$scope.result = '';
    		}
    	};

}]);


