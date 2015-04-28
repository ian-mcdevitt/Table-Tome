angular.module('subscriberService', [])
    .factory('Subscriber', ['$http', function($http) {
        var subFactory = {};

        subFactory.create = function(email_) {
            $http.post('/api/mail', {
                email: email_
            }).success(function(data) {
                return data.success;
            });
        };

        return subFactory;
    }]);
