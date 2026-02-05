angular.module('dashboard')
  .controller('dashboardController', ['$scope', '$state', 'DashboardService', 'toastr',
    function ($scope, $state, dashboardService, toastr) {
      $scope.userManagment = function () {
        $state.transitionTo('userManagment');
      };

      var init = function () {
        $state.go('home');
      };

      init();
    }]);
