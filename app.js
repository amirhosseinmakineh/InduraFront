angular.module('app', ['ui.router', 'toastr', 'dashboard','userManagment'])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }]);
