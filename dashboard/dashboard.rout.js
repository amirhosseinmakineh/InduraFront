angular.module('dashboard')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('home', {
        url: '/dashboard',
        template: '<div class="panel"><div class="panel__head"><div class="panel__title">خانه</div></div><p>به داشبورد خوش آمدید.</p></div>'
      });

  });
