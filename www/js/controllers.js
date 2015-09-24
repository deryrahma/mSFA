angular.module('starter.controllers', [])

.controller( 'LoginCtrl', function( $scope, $state, $ionicLoading ) {
  $scope.data = {};

  $scope.doLogin = function() {
    $ionicLoading.show({
      duration: 3000,
      noBackdrop: true,
      templateUrl: 'templates/spinner/login.html'
    });
    $state.go( 'home' );
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
    $state.go( 'agenda' );
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
} )

.controller( 'AgendaCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $scope.groups = [];

  $scope.groups[0] = {
    name: 'Hari ini(2)',
    items: [],
    show: false
  };
  $scope.groups[0].items.push( {
    id: 0,
    aktivitas: 'Product Booking',
    konsumen: 'KHOLIK',
    kodeagenda: 'MWA-BOOKPRORG/VIII/01/13-000004',
    timestamp: 'Aug 01, 2013 10:56'
  } );
  $scope.groups[0].items.push( {
    id: 1,
    aktivitas: 'Task Assignment',
    konsumen: 'LIDIA CELL',
    kodeagenda: 'MWA-PSTA/VIII/01/13-0000019',
    timestamp: 'Aug 01, 2013 10:51'
  } );

  $scope.groups[1] = {
    name: 'Lanjut(1)',
    items: [],
    show: false
  };
  $scope.groups[1].items.push( {
    id: 2,
    aktivitas: 'Task Assignment',
    konsumen: 'AFTALA CELL 2',
    kodeagenda: 'MWA-PSTA/VIII/01/13-0000026',
    timestamp: 'Aug 02, 2013 12:31'
  } );

  $scope.groups[2] = {
    name: 'Arsip(0)',
    items: [],
    show: false
  };

  $ionicModal.fromTemplateUrl('templates/agenda/modalIndex.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.showModal = function() {
    $scope.modal.show();
  }

  $scope.hideModal = function() {
    $scope.modal.hide();
  }

  $scope.doCreate = function() {
    $scope.modal.hide();
    $state.go( 'agendaCreate' );
  }

  $scope.doRefresh = function() {
    $scope.modal.hide();
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
} )

.controller( 'AgendaEditCtrl', function( $scope, $state, $stateParams, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalEdit.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.groups = [];
  $scope.groups[0] = {
    aktivitas: 'Product Booking',
    tipeKonsumen: 'OUTLET',
    konsumen: 'KHOLIK',
    timestamp: 'Aug 01, 2013 10:56',
    deskripsi: '0',
    hasil: '',
    status: 'Selesai'
  }
  $scope.groups[1] = {
    aktivitas: 'Task Assignment',
    tipeKonsumen: 'OUTLET',
    konsumen: 'LIDIA CELL',
    timestamp: 'Aug 01, 2013 10:51',
    deskripsi: '0',
    hasil: '',
    status: 'Selesai'
  };
  $scope.groups[2] = {
    aktivitas: 'Task Assignment',
    tipeKonsumen: 'OUTLET',
    konsumen: 'AFTALA CELL 2',
    timestamp: 'Aug 02, 2013 12:31',
    deskripsi: '0',
    hasil: '',
    status: 'Selesai'
  };

  $scope.submitData = $scope.groups[$stateParams.id];

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.showModal = function() {
    $scope.modal.show();
  }

  $scope.hideModal = function() {
    $scope.modal.hide();
  }

  $scope.doCheckIn = function() {
    $scope.modal.hide();
  }

  $scope.brokenQRCode = function() {
    $scope.modal.hide();
  }

  $scope.outletClosed = function() {
    $scope.modal.hide();
  }

  $scope.doUpdate = function() {
    $scope.modal.hide();
  }

  $scope.doSubmit = function() {
  }
} )

.controller( 'AgendaCreateCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalCreate.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.data = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.showModal = function() {
    $scope.modal.show();
  }

  $scope.hideModal = function() {
    $scope.modal.hide();
  }

  $scope.openDraft = function() {
    $scope.modal.hide();
  }

  $scope.saveDraft = function() {
    $scope.modal.hide();
  }

  $scope.doProcess = function() {
    $scope.modal.hide();
  }

  $scope.doSubmit = function() {
  }
} );
