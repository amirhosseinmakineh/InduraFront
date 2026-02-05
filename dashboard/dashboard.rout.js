angular.module('dashboard')
  .config(function ($stateProvider) {

    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardController',
    });

  });
