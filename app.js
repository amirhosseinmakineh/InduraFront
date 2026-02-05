angular.module('app', [
  'ui.router',
  'toastr',
  'auth',
  'dashboard',
  'userManagment'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'index.main.html',
    controller: 'indexController'
  });
});
