angular.module('dashboard')
  .controller('dashboardController', ['$scope', '$state', function ($scope, $state) {
    $scope.goToUsers = function () {
      $state.go('userManagment');
    };
  }]);
