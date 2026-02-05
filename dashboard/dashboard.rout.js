angular.module('dashboard')
  .config(function ($stateProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'dashboard/layout.html',
        controller: 'dashboardController',
        controllerAs: 'vm'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/home.html'
      })
      .state('app.userManagment', {
        url: '/users',
        templateUrl: 'userManagment/userManagment.html',
        controller: 'UserManagmentController',
        controllerAs: 'vm'
      });

  });
