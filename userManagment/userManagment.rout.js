angular.module('userManagment')
.routeConfig(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('userManagment', {
    url: '/userManagment',
     templateUrl: 'userManagment/userManagment.html',
     controller: 'userManagmentController',
     });  
}]);