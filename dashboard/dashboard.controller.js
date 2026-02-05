angular.module('dashboard')
  .controller('dashboardController', ['$scope', '$state', 'DashboardService', 'toastr',
    function ($scope, $state, dashboardService, toastr) {
      $scope.userManagment = function () {
        if ($state.includes('dashboard')) {
          $state.go('dashboard.userManagment');
          return;
        }

        $state.go('userManagment');
      };

      var init = function () {
        if ($state.includes('dashboard')) {
          $state.go('dashboard.home');
          return;
        }

        $state.go('home');
      };

      init();
    }]);
