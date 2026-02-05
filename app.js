angular.module('app', [
  'ui.router',
  'toastr',
  'dashboard',
  'userManagment'
])
.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
});
