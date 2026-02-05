angular.module('userManagment')
  .config(function ($stateProvider) {

    $stateProvider.state('app.userManagment', {
      url: '/users',
      templateUrl: 'userManagment/userManagment.html',
      controller: 'UserManagmentController',
      controllerAs: 'vm'
    });

  });
