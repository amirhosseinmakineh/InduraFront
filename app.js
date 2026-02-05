angular.module('app', [
  'ui.router',
  'toastr',
  'auth',
  'dashboard',
  'userManagment'
])
.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
});
