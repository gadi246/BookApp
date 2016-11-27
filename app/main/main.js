(function(){  

'use strict';

angular.module('myApp.main', ['ngRoute','ngMessages'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  })
}])

.controller('mainCtrl',['$http','$scope','$log', function($http,$scope,$log) {
  $scope.books=[];

  $scope.sortDate = function (num) {
    return new Date(num*1000);
  };
  //Ajax request for the books JSON
  $http.get('books.json').success(function (data) {
    $scope.books = data.books.map(function (obj) {
      return Object.assign({},obj,{date: $scope.sortDate(obj.date)})
    });
    $log.log($scope.books);
  });

  //A boolean to configure which item is to be edited
  $scope.selected = '';
 $scope.editBook = function (bookId) {
   $scope.selected = $scope.selected ? $scope.selected : bookId;
 };
  //Submit function to the edited item
  $scope.submit = function () {
    $scope.selected = '';
  };
  $scope.imgPlaceHolder = "images/img-placeholder.png";

  //Delete function to the selected item the user wishes to remove
  $scope.delete = function (selecetedBook) {
    var deleteValid = confirm("Delete "+ selecetedBook.title+" ?");
    deleteValid ? $scope.books = $scope.books.filter(function (item) {
      return selecetedBook !== item
    }) : '';
  };


}]);

})();
