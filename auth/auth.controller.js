angular.module('auth')
  .controller('authController', ['$scope', '$state', 'AuthService', 'toastr',
    function ($scope, $state, authService, toastr) {
      $scope.registerModel = {
        userName: '',
        mobileNumber: '',
        password: ''
      };

      $scope.loginModel = {
        mobileNumber: '',
        password: ''
      };

      $scope.register = function () {
        authService.register($scope.registerModel)
          .then(function () {
            toastr.success('ثبت نام با موفقیت انجام شد');
            $state.go('login');
          })
          .catch(function (err) {
            toastr.error(err.data && err.data.message ? err.data.message : 'خطا در ثبت نام');
          });
      };

      $scope.login = function () {
        authService.login($scope.loginModel)
          .then(function () {
            toastr.success('ورود با موفقیت انجام شد');
            $state.go('dashboard');
          })
          .catch(function (err) {
            toastr.error(err.data && err.data.message ? err.data.message : 'خطا در ورود');
          });
      };
    }
  ]);
