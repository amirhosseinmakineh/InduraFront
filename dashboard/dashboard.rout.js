angular.module('dashboard')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardController'
      })
      .state('dashboard.home', {
        url: '',
        template: '<div class="panel"><div class="panel__title">به داشبورد خوش آمدید</div></div>'
      });
  }]);
