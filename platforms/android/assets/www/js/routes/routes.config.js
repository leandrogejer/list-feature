'use strict';

angular
  .module('starter')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  console.log('test');

  $stateProvider
    .state('list',{
      url: '/',
      templateUrl: 'templates/list.html'
    })

    $stateProvider
    .state('list-feature',{
      url: '/detail/:id',
      templateUrl: 'templates/list-feature.html'
    });
}
