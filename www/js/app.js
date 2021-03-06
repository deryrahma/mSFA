// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state( 'login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  } )

  .state( 'home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  } )

  .state( 'agenda', {
    url: '/agenda',
    templateUrl: 'templates/agenda/index.html',
    controller: 'AgendaCtrl'
  } )

  .state( 'agendaEditTA', {
    url: '/agenda/edit/ta/:id',
    templateUrl: 'templates/agenda/editTA.html',
    controller: 'AgendaEditTACtrl'
  } )

  .state( 'agendaEditPB', {
    url: '/agenda/edit/pb/:id',
    templateUrl: 'templates/agenda/editPB.html',
    controller: 'AgendaEditPBCtrl'
  } )

  .state( 'agendaCreate', {
    url: '/agenda/create',
    templateUrl: 'templates/agenda/create.html',
    controller: 'AgendaCreateCtrl'
  } )

  .state( 'internalSurvey', {
    url: '/internalSurvey',
    templateUrl: 'templates/agenda/internalSurvey.html',
    controller: 'InternalSurveyCtrl'
  } )

  .state( 'swingerSurvey', {
    url: '/swingerSurvey',
    templateUrl: 'templates/agenda/swingerSurvey.html',
    controller: 'SwingerSurveyCtrl'
  } )

  .state( 'salesforceSales', {
    url: '/salesforceSales',
    templateUrl: 'templates/agenda/salesforceSales.html',
    controller: 'SalesforceSalesCtrl'
  } )

  .state( 'salesforceSalesAddUnit', {
    url: '/salesforceSalesAddUnit',
    templateUrl: 'templates/agenda/salesforceSalesAddUnit.html',
    controller: 'SalesforceSalesAddUnitCtrl'
  } )

  .state( 'freeSurvey', {
    url: '/freeSurvey',
    templateUrl: 'templates/agenda/freeSurvey.html',
    controller: 'FreeSurveyCtrl'
  } )

  .state( 'freeSurveyBSO', {
    url: '/freeSurveyBSO',
    templateUrl: 'templates/agenda/freeSurveyBSO.html',
    controller: 'FreeSurveyBSOCtrl'
  } )

  .state( 'freeSurveyDMP', {
    url: '/freeSurveyDMP',
    templateUrl: 'templates/agenda/freeSurveyDMP.html',
    controller: 'FreeSurveyDMPCtrl'
  } )

  .state( 'freeSurveyBS', {
    url: '/freeSurveyBS',
    templateUrl: 'templates/agenda/freeSurveyBS.html',
    controller: 'FreeSurveyBSCtrl'
  } )

  .state( 'stockTaking', {
    url: '/stockTaking',
    templateUrl: 'templates/agenda/stockTaking.html',
    controller: 'StockTakingCtrl'
  } )

  .state( 'stockTakingInput', {
    url: '/stockTakingInput',
    templateUrl: 'templates/agenda/stockTakingInput.html',
    controller: 'StockTakingInputCtrl'
  } )

  .state( 'visitOutlet', {
    url: '/visitOutlet',
    templateUrl: 'templates/agenda/visitOutlet.html',
    controller: 'VisitOutletCtrl'
  } )

  .state( 'outbox', {
    url: '/outbox',
    templateUrl: 'templates/outbox/index.html',
    controller: 'OutboxCtrl'
  } )

  .state( 'addPos', {
    url: '/addPos',
    templateUrl: 'templates/transaksi/addPOS.html',
    controller: 'AddPOSCtrl'
  } )

  .state( 'addEvent', {
    url: '/addEvent',
    templateUrl: 'templates/transaksi/addEvent.html',
    controller: 'AddEventCtrl'
  } )

  .state( 'informasiStok', {
    url: '/informasiStok',
    templateUrl: 'templates/laporan/informasiStok.html',
    controller: 'InformasiStokCtrl'
  } )

  .state( 'riwayatAktivitas', {
    url: '/riwayatAktivitas',
    templateUrl: 'templates/laporan/riwayatAktivitas.html',
    controller: 'RiwayatAktivitasCtrl'
  } )

  .state( 'hargaProduk', {
    url: '/hargaProduk',
    templateUrl: 'templates/laporan/hargaProduk.html',
    controller: 'HargaProdukCtrl'
  } )

  .state( 'outlet', {
    url: '/outlet',
    templateUrl: 'templates/laporan/outlet.html',
    controller: 'OutletCtrl'
  } )

  .state( 'outletEdit', {
    url: '/outletEdit',
    templateUrl: 'templates/laporan/outletEdit.html',
    controller: 'OutletEditCtrl'
  } )

  .state( 'reloadParameters', {
    url: '/reloadParameters',
    templateUrl: 'templates/settings/reloadParameters.html',
    controller: 'ReloadParametersCtrl'
  } )

  .state( 'about', {
    url: '/about',
    templateUrl: 'templates/settings/about.html',
    controller: 'AboutCtrl'
  } )

  .state( 'berita', {
    url: '/berita',
    templateUrl: 'templates/broadcast/berita.html',
    controller: 'BeritaCtrl'
  } )

  .state( 'beritaShow', {
    url: '/beritaShow',
    templateUrl: 'templates/broadcast/beritaShow.html',
    controller: 'BeritaShowCtrl'
  } )

  .state( 'faq', {
    url: '/faq',
    templateUrl: 'templates/broadcast/faq.html',
    controller: 'FaqCtrl'
  } )

  .state( 'quiz', {
    url: '/quiz',
    templateUrl: 'templates/broadcast/quiz.html',
    controller: 'QuizCtrl'
  } )

  .state( 'quizAnswer', {
    url: '/quizAnswer',
    templateUrl: 'templates/broadcast/quizAnswer.html',
    controller: 'QuizAnswerCtrl'
  } )

  .state( 'documentSharing', {
    url: '/documentSharing',
    templateUrl: 'templates/broadcast/documentSharing.html',
    controller: 'DocumentSharingCtrl'
  } )

  .state( 'personal', {
    url: '/personal',
    templateUrl: 'templates/personal/index.html',
    controller: 'PersonalCtrl'
  } );

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise( 'login' );
});
