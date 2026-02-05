angular.module('userManagment')
  .controller('userManagmentController', ['$scope', 'userManagmentService', 'toastr',
    function ($scope, userManagmentService, toastr) {
      $scope.users = [];
      $scope.editingId = null;
      $scope.editModel = {};

      function loadUsers() {
        userManagmentService.getUsers().then(function (list) {
          $scope.users = list;
        });
      }

      $scope.startEdit = function (user) {
        $scope.editingId = user.id;
        $scope.editModel = angular.copy(user);
      };

      $scope.cancelEdit = function () {
        $scope.editingId = null;
        $scope.editModel = {};
      };

      $scope.saveEdit = function () {
        userManagmentService.updateUser($scope.editModel).then(function () {
          toastr.success('کاربر با موفقیت آپدیت شد');
          $scope.cancelEdit();
          loadUsers();
        });
      };

      $scope.deleteUser = function (id) {
        userManagmentService.deleteUser(id).then(function () {
          toastr.success('کاربر حذف شد');
          if ($scope.editingId === id) {
            $scope.cancelEdit();
          }
          loadUsers();
        });
      };

      loadUsers();
    }
  ]);
