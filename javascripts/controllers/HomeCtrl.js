"use strict";

app.controller("HomeCtrl", function($scope, SearchFactory, PostFactory, $rootScope){
$scope.searchAir = [];
$scope.searchedCode = {};
$scope.searchedCity = {};
$scope.posts = [];
$scope.newPostRevealer = false;
let allPosts = [];

$scope.searchAirportCode = (searchCode)=>{
    SearchFactory.getAirportSearchCode(searchCode).then((searchCodes)=>{
      $scope.searchedCode = searchCodes;
      PostFactory.getPost().then(function(fbItems){
         allPosts = fbItems;
         getAirportList($scope.searchedCode.code);
      });
    });
  };

$scope.searchAirportCity = (searchCity)=>{
    SearchFactory.getAirportSearchCity(searchCity).then((searchCities)=>{
      $scope.searchedCity = searchCities;
    });
  };

    let getAirportList = function(codeycode){
      $scope.posts = [];
      allPosts.forEach(function(mypost){
        if (mypost.airportCode === codeycode){
          $scope.posts.push(mypost);
        }
      });
    };

  $scope.greaterThan = function(prop){
    let val = new Date();
    val.setHours(0,0,0,0);
    return function(item){
      return item[prop] > val;
    };
  };

});