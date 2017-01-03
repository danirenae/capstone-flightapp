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

//   let checkTime = function (){
//   let curDate = new Date();
//   let y = curDate.getFullYear();
//   let m = curDate.getMonth() + 1;
//       if (m < 10) {
//         m = '0' + m;
//   }
//   var d = curDate.getDate();
//       if (d < 10) {
//         d = '0' + d;
//   }
//   $scope.curDate = y + '-' + m + '-' + d;
// };
// checkTime();

});