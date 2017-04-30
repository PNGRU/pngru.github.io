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
		templateUrl : '/pages/index.html',
		controller  : 'indexController',
		title		: 'HOME'
	})

		.when('/index', {
		templateUrl : '/pages/index.html',
		controller  : 'indexController',
		title		: 'HOME'
	})

		.when('/about', {
			templateUrl : '/pages/index.html',
			controller  : 'indexController',
			title		: 'About'
		})

});

app.run(['$rootScope', '$window',  function($scope, $window) {
	$scope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
		$window.scrollTo(0,0);
		document.title = '幸町第二中学校 - ' + currentRoute.title;
	});
}]);