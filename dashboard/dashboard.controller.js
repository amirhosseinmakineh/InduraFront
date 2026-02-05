angular.module('dashboard')
  .controller('dashboardController', ['$scope', '$state', 'DashboardService', 'toastr',
    function ($scope, $state, dashboardService, toastr) {
      $scope.userManagment = function () {
        $state.transitionTo('/dashboard.userManagment');
      };

      var init = function () {
        debugger;
      };

      init();
    }]);
