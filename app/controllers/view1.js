'use strict';

angular.module('app.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/app/views/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);