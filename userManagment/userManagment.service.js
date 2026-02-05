angular.module('userManagment')
  .service('userManagmentService', ['$q', function ($q) {
    var users = [
      { id: 1, userName: 'amir', mobileNumber: '09120000001', role: 'Admin' },
      { id: 2, userName: 'sara', mobileNumber: '09120000002', role: 'User' },
      { id: 3, userName: 'reza', mobileNumber: '09120000003', role: 'User' }
    ];

    this.getUsers = function () {
      return $q.when(angular.copy(users));
    };

    this.updateUser = function (model) {
      var index = users.findIndex(function (item) { return item.id === model.id; });
      if (index >= 0) {
        users[index] = angular.copy(model);
      }
      return $q.when(true);
    };

    this.deleteUser = function (id) {
      users = users.filter(function (item) { return item.id !== id; });
      return $q.when(true);
    };
  }]);
