angular.module("app")
  .controller("indexController", ['$scope','$state','IndexService','toastr',
    function ($scope, $state, indexService, toastr) {

      $scope.isLogin = true;

      $scope.showForm = function (value) {
        $scope.isLogin = value;
      };

      $scope.register = function () {
        indexService.register($scope.registerModel)
          .then(function (res) {
            toastr.success('ثبت نام با موفقیت انجام شد');
            $scope.isLogin = true;
            init();
          })
          .catch(function (err) {
            toastr.error(err.data?.message || 'خطا در ثبت نام');
          });
      };

      $scope.login = function(){
        return indexService.login($scope.loginModel)
          .then(function (res) {
            toastr.success('ورود با موفقیت انجام شد');
           $state.transitionTo('dashboard');
          })
          .catch(function (err) {
            toastr.error(err.data?.message || 'خطا در ورود');
          });
      }

        function init() {
        $scope.registerModel = {
          userName: '',
          mobileNumber: '',
          password: '',
        };

        $scope.loginModel = {
          mobileNumber: '',
          password: '',
        };
      }
      init();
    }
  ]);
