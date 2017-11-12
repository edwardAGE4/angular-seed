'use strict';

angular.module('myApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
        .when('/customers', {
            templateUrl: 'customers/customers.html',
            controller: 'CustomersCtrl'
        })
    
        .when('/customers/Add', {
            templateUrl: 'customers/customersAdd.html',
            controller: 'CustomersAdd'
        })
}])



//controleur de customers

.controller('CustomersCtrl', ['$scope','customersProvider', function($scope, customersProvider) {
    
    $scope.customers = customersProvider.initCustomer();
    
}])

.controller('CustomersAdd', ['$scope','customersProvider', function($scope, customersProvider) {
    
    $scope.newcustomer = function (customer){
        $scope.customers = customersProvider.new(customer);
        console.log($scope.customers);
    }
    
}])

.controller('CustomersRmd', ['$scope', function($scope) {
    
    
}])

.controller('CustomersUpd', ['$scope', function($scope) {
    
    
}]);