angular.module('dashboard')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardController'
      })
      .state('dashboard.home', {
        url: '',
        template: '<div class="panel"><div class="panel__title">به داشبورد خوش آمدید</div></div>'
      })
      .state('home', {
        url: '/home',
        template: '<div class="panel"><div class="panel__title">به داشبورد خوش آمدید</div></div>'
      });
  }]);
