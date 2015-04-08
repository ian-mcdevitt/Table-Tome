angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider
	// home page
	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})
	// spellbook page
	.when('/spellbook', {
		templateUrl: 'app/views/pages/spellbook.html',
		controller: 'spellController',
		controllerAs: 'spellCtrl'
	});

	$locationProvider.html5Mode(true);
});