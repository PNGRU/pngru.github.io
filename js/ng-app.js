/**
 * AngularJS
*/
var app = angular.module('pngru', ['ngRoute']);

/**
 * ng-route
*/

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : '/pages/top.html',
		controller  : 'indexController',
		title		: 'HOME'
		})

		.when('/index', {
		templateUrl : '/pages/top.html',
		controller  : 'indexController',
		title		: 'HOME'
		})

		.when('/about', {
			templateUrl : '/pages/about.html',
			controller  : 'indexController',
			title		: 'About'
		})

		.when('/server', {
			templateUrl : '/pages/server.html',
			controller  : 'indexController',
			title		: 'サーバー紹介'
		})
		.when('/jmbans', {
			templateUrl : '/pages/jmbans.html',
			controller  : 'indexController',
			title       : 'JMBans一周忌カウントダウン'
		})

});

app.run(['$rootScope', '$window',  function($scope, $window) {
	$scope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
		$window.scrollTo(0,0);
		document.title = 'PNGRU - ' + currentRoute.title;
	});
}]);
