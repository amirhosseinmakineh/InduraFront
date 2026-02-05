angular.module('userManagment')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('dashboard.userManagment', {
      url: '/userManagment',
      templateUrl: 'userManagment/userManagment.html',
      controller: 'userManagmentController'
    });
  }]);
