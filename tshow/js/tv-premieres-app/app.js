'use strict';

angular.module('TShowTrack',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'mainController'
			})
			.when('/tv',{
				templateUrl: 'partials/tvsnow.html',
				controller: 'tvController'
			})
			.when('/movie',{
				templateUrl: 'partials/moviesnow.html',
				controller: 'movieController'
			})
			.when('/movie/more',{
				templateUrl: 'partials/movies.html',
				controller: 'mainMovController'
			})
			.otherwise({
				redirectTo: '/'});
	}]);
