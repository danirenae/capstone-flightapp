"use strict";

app.controller("HomeCtrl", function($scope, SearchFactory, PostFactory, $rootScope){
$scope.searchAir = [];
$scope.searchedCode = {};
$scope.searchedCity = {};

// return search push it up to the dom elements
  // $scope.enterKey = (event)=>{
  //   var keyCode = event.which || event.keyCode;
  //     if (keyCode === 13) {
  //         $scope.searchAirportCode($scope.search);
  //     }
  // };


  //search by airport code
$scope.searchAirportCode = (searchCode)=>{
    console.log("searchCode", searchCode);
    SearchFactory.getAirportSearchCode(searchCode).then((searchCodes)=>{
      console.log(searchCodes);
      $scope.searchedCode = searchCodes
    });
  };

    //search by airport city
$scope.searchAirportCity = (searchCity)=>{
    console.log("searchCity", searchCity);
    SearchFactory.getAirportSearchCity(searchCity).then((searchCities)=>{
      console.log(searchCities);
      $scope.searchedCity = searchCities
    });
  };


    let getAirportList = function(){
      PostFactory.getPost().then(function(fbItems){
        $scope.posts = fbItems;
        console.log("THINGS ARE HAPPENING", fbItems)
      });
    };
  // getAirportList();

});

