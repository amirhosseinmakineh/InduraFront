angular.module('dashboard')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardController',
    });
  }]);
