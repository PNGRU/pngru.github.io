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
		title		: 'Home'
	})

		.when('/index', {
		templateUrl : '/pages/top.html',
		controller  : 'indexController',
		title		: 'Home'
	})
});