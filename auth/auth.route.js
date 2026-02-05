angular.module('auth')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html',
        controller: 'authController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html',
        controller: 'authController'
      });
  });
