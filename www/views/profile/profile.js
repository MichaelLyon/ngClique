'Use Strict';
angular.module('App').controller('profileController', function ($scope, $state,$cordovaOauth, $localStorage, $log, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = firebase.database().ref();

  $scope.logOut = function () {
    Auth.logout();
    $location.path("/login");
  }
}
);
