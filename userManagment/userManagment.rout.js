angular.module('userManagment')
  .config(function ($stateProvider) {
    $stateProvider.state('userManagment', {
      url: '/users',
      templateUrl: 'userManagment/userManagment.html',
      controller: 'userManagmentController'
    });
  });
