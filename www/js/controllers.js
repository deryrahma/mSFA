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
  };
} )

.controller( 'HomeCtrl', function( $scope, $state, $ionicModal ) {
  $scope.data = {};

  $ionicModal.fromTemplateUrl('templates/transaksi/modalIndex.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // KOTAK KELUAR
  $scope.goOutbox = function() {
    $state.go( 'outbox' );
  };

  // PERSONAL
  $scope.goPersonal = function() {
    $state.go( 'login' );
  };

  // AGENDA
  $scope.goAgenda = function() {
    $state.go( 'agenda' );
  };

  // TRANSAKSI
  $scope.goTransaction = function() {
    $scope.modal.show();
  };
  $scope.hideModal = function() {
    $scope.modal.hide();
  };
  $scope.addPOS = function() {
    $state.go( 'addPos' );
    $scope.modal.hide();
  };
  $scope.addEvent = function() {
    $state.go( 'addEvent' );
    $scope.modal.hide();
  };
  $scope.eventSales = function() {
    $scope.modal.hide();
  };

  // BROADCAST
  $scope.goBroadcast = function() {
    $state.go( 'login' );
  };

  // COLLABORATE
  $scope.goCollaborate = function() {
    $state.go( 'login' );
  };

  // LAPORAN
  $scope.goReport = function() {
    $state.go( 'login' );
  };

  // PENGATURAN
  $scope.goSettings = function() {
    $state.go( 'login' );
  };
} )

.controller( 'OutboxCtrl', function( $scope, $state, $ionicHistory ) {
  $scope.groups = [];

  $scope.groups[0] = {
    name: 'Failed(0)',
    items: [],
    show: false
  };
  $scope.groups[1] = {
    name: 'Pending item(0)',
    items: [],
    show: false
  };

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
  
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

.controller( 'AddPOSCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $scope.data = {};

  $ionicModal.fromTemplateUrl('templates/transaksi/modalAddPOS.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'AddEventCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $scope.data = {};

  $ionicModal.fromTemplateUrl('templates/transaksi/modalAddEvent.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
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
    type: 'pb',
    aktivitas: 'Product Booking',
    konsumen: 'KHOLIK',
    kodeagenda: 'MWA-BOOKPRORG/VIII/01/13-000004',
    timestamp: 'Aug 01, 2013 10:56'
  } );
  $scope.groups[0].items.push( {
    id: 0,
    type: 'ta',
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
    id: 1,
    type: 'ta',
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
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doCreate = function() {
    $scope.modal.hide();
    $state.go( 'agendaCreate' );
  };
  
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

.controller( 'AgendaEditTACtrl', function( $scope, $state, $stateParams, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalEditTA.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/agenda/modalCheckIn.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalTwo = modal;
  });

  $scope.groups = [];
  $scope.groups[0] = {
    aktivitas: 'Task Assignment',
    tipeKonsumen: 'OUTLET',
    konsumen: 'LIDIA CELL',
    timestamp: 'Aug 01, 2013 10:51',
    deskripsi: '0',
    hasil: '',
    status: 'Selesai'
  };
  $scope.groups[1] = {
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
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.hideModalTwo = function() {
    $scope.modalTwo.hide();
  };

  $scope.doCheckIn = function() {
    $scope.modal.hide();
    $scope.modalTwo.show();
  };

  $scope.internalSurvey = function() {
    $scope.modalTwo.hide();
    $state.go( 'internalSurvey' );
  };

  $scope.swingerSurvey = function() {
    $scope.modalTwo.hide();
    $state.go( 'swingerSurvey' );
  };

  $scope.salesforceSales = function() {
    $scope.modalTwo.hide();
    $state.go( 'salesforceSales' );
  };

  $scope.freeSurvey = function() {
    $scope.modalTwo.hide();
    $state.go( 'freeSurvey' );
  };

  $scope.stockTaking = function() {
    $scope.modalTwo.hide();
    $state.go( 'stockTaking' );
  };

  $scope.visitOutlet = function() {
    $scope.modalTwo.hide();
    $state.go( 'visitOutlet' );
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'AgendaEditPBCtrl', function( $scope, $state, $stateParams, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalEditPB.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.groups = [];
  $scope.groups[0] = {
    perusahaan: 'PT. BATAVIA AKSES NUSANTARA',
    distributor: 'PT. BATAVIA AKSES NUSANTARA-Karawang',
    to: 'KHOLIK',
    idx: 1,
    items: []
  };

  $scope.groups[0].items.push( {
    nama: 'Perdana Simpati 5k',
    jumlah: 5,
    cp: '085309090046 - 85309090050'
  } );

  $scope.submitData = $scope.groups[$stateParams.id];

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
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
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'InternalSurveyCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurvey.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurveyQtyJual.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalQtyJual = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurveyStock.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalStock = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurveyHargaJual.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalHargaJual = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurveyHargaBeli.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalHargaBeli = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalInternalSurveyQtyBeli.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalQtyBeli = modal;
  });

  $scope.data = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.showQtyJual = function() {
    $scope.modalQtyJual.show();
  };
  $scope.hideModalQtyJual = function() {
    $scope.modalQtyJual.hide();
  };

  $scope.showStock = function() {
    $scope.modalStock.show();
  };
  $scope.hideModalStock = function() {
    $scope.modalStock.hide();
  };

  $scope.showHargaJual = function() {
    $scope.modalHargaJual.show();
  };
  $scope.hideModalHargaJual = function() {
    $scope.modalHargaJual.hide();
  };

  $scope.showHargaBeli = function() {
    $scope.modalHargaBeli.show();
  };
  $scope.hideModalHargaBeli = function() {
    $scope.modalHargaBeli.hide();
  };

  $scope.showQtyBeli = function() {
    $scope.modalQtyBeli.show();
  };
  $scope.hideModalQtyBeli = function() {
    $scope.modalQtyBeli.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'SwingerSurveyCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurvey.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveySimpati.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSimpati = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyAs.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAs = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyXL.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalXL = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyIM3.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalIM3 = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyThree.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalThree = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyAxis.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAxis = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyOthers.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalOthers = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSwingerSurveyNewCustomer.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalNewCustomer = modal;
  });

  $scope.data = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.showSimpati = function() {
    $scope.modalSimpati.show();
  };
  $scope.hideSimpati = function() {
    $scope.modalSimpati.hide();
  };

  $scope.showAs = function() {
    $scope.modalAs.show();
  };
  $scope.hideAs = function() {
    $scope.modalAs.hide();
  };

  $scope.showXL = function() {
    $scope.modalXL.show();
  };
  $scope.hideXL = function() {
    $scope.modalXL.hide();
  };

  $scope.showIM3 = function() {
    $scope.modalIM3.show();
  };
  $scope.hideIM3 = function() {
    $scope.modalIM3.hide();
  };

  $scope.showThree = function() {
    $scope.modalThree.show();
  };
  $scope.hideThree = function() {
    $scope.modalThree.hide();
  };

  $scope.showAxis = function() {
    $scope.modalAxis.show();
  };
  $scope.hideAxis = function() {
    $scope.modalAxis.hide();
  };

  $scope.showOthers = function() {
    $scope.modalOthers.show();
  };
  $scope.hideOthers = function() {
    $scope.modalOthers.hide();
  };

  $scope.showNewCustomer = function() {
    $scope.modalNewCustomer.show();
  };
  $scope.hideNewCustomer = function() {
    $scope.modalNewCustomer.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'SalesforceSalesCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalSalesforceSales.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSalesforceSalesMethod.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalTwo = modal;
  });

  $scope.data = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };
  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.showModalTwo = function() {
    $scope.modalTwo.show();
  };
  $scope.hideModalTwo = function() {
    $scope.modalTwo.hide();
  };

  $scope.addUnit = function() {
    $scope.modalTwo.hide();
    $state.go( 'salesforceSalesAddUnit' );
  }

  $scope.doSubmit = function() {
  };
} )

.controller( 'SalesforceSalesAddUnitCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalSalesforceSalesAddUnit.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSalesforceSalesProduct.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalProduct = modal;
  });
  $ionicModal.fromTemplateUrl('templates/agenda/modalSalesforceSalesSerial.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSerial = modal;
  });

  $scope.data = {};

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };
  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.showModalProduct = function() {
    $scope.modalProduct.show();
  };
  $scope.hideModalProduct = function() {
    $scope.submitData = {
      product: 'Perdana Simpati 5k',
      serialFormat: 'MSISDN'
    };
    $scope.modalProduct.hide();
  };

  $scope.showModalSerial = function() {
    $scope.modalSerial.show();
  };
  $scope.hideModalSerial = function() {
    $scope.modalSerial.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'FreeSurveyCtrl', function( $scope, $state, $ionicHistory ) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.outletSurveyBranding = function() {
    $state.go( 'freeSurveyBSO' );
  };

  $scope.matproDistribution = function() {
    $state.go( 'freeSurveyDMP' );
  };

  $scope.shareBuy = function() {
    $state.go( 'freeSurveyBS' );
  };
} )

.controller( 'FreeSurveyBSOCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalFreeSurveyBSO.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'FreeSurveyDMPCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalFreeSurveyDMP.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'FreeSurveyBSCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalFreeSurveyBS.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'StockTakingCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalStockTaking.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doInput = function() {
    $state.go( 'stockTakingInput' );
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'StockTakingInputCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalStockTakingInput.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doSubmit = function() {
  };
} )

.controller( 'VisitOutletCtrl', function( $scope, $state, $ionicModal, $ionicHistory ) {
  $ionicModal.fromTemplateUrl('templates/agenda/modalVisitOutlet.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  $scope.doInput = function() {
    $state.go( 'stockTakingInput' );
  };

  $scope.doSubmit = function() {
  };
} );
