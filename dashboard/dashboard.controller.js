angular.module('dashboard')
  .controller('dashboardController', ['$scope', '$state', 'DashboardService', 'toastr',
    function ($scope, $state, dashboardService, toastr) {
      $scope.userManagment = function () {
        debugger;
        $state.go('dashboard.userManagment');
      };

      var init = function () {
      };

      init();
    }]);
