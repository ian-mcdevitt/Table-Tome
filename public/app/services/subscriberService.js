angular.module('subscriberService', [])
.factory('Subscriber', function($http) {
	var subFactory = {};

	subFactory.create = function(subData) {
		return $http.post('/mail', subData);
	};

	subFactory.delete = function(id) {
		return $http.delete('/mail/' + id);
	};

	return subFactory;
});