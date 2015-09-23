angular.module('starter.controllers', [])

.controller( 'LoginCtrl', function( $scope, $state, $ionicLoading ) {
  $scope.data = {};

  $scope.doLogin = function() {
    $state.go( 'home' );
    $ionicLoading.show({
      duration: 3000,
      noBackdrop: true,
      templateUrl: 'templates/spinner/login.html'
    });
  }
} )

.controller( 'HomeCtrl', function( $scope, $state ) {
  $scope.data = {};

  $scope.goOutbox = function() {
    $state.go( 'login' );
  }

  $scope.goPersonal = function() {
    $state.go( 'login' );
  }

  $scope.goAgenda = function() {
    $state.go( 'login' );
  }

  $scope.goTransaction = function() {
    $state.go( 'login' );
  }

  $scope.goBroadcast = function() {
    $state.go( 'login' );
  }

  $scope.goCollaborate = function() {
    $state.go( 'login' );
  }

  $scope.goReport = function() {
    $state.go( 'login' );
  }

  $scope.goSettings = function() {
    $state.go( 'login' );
  }
} );
