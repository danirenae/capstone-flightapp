"use strict";

app.controller("HomeCtrl", function($scope, SearchFactory, PostFactory, $rootScope){
$scope.searchAir = [];
$scope.searchedCode = {};
// $scope.airportRevealer = false;
//return search push it up to the dom elements
  // $scope.enterKey = (event)=>{
  //   var keyCode = event.which || event.keyCode;
  //     if (keyCode === 13) {
  //         $scope.searchAirports($scope.searchQuery);
  //     }
  // };

  //search by airport city
  // $scope.searchAirports = (searchCity)=>{
  //   console.log("searchTerm", searchCity);
  //   SearchFactory.getAirportSearch(searchCity).then((searchCities)=>{
  //     console.log("searchCities", searchCities.airportCity);
  //     $scope.searchAir = searchCities.airportCity;
  //   });
  // };

  //search by airport code
$scope.searchAirportCode = (searchCode)=>{
    console.log("searchCode", searchCode);
    SearchFactory.getAirportSearch(searchCode).then((searchCodes)=>{
      console.log(searchCodes);
      $scope.searchedCode = searchCodes
      // $scope.searchAir = searchCodes.airportCode;
    });
  };

// let getAirportPostsByCode = function(){
//   PostFactory.getPost($rootScope.airports[0].code).then(function(fbItems){

//     $scope.posts = fbItems;
//     console.log(fbItems);
//     console.log(airports[0].code)
//   })
// };
// getAirportPostsByCode();

// let getItems = function(){
//    ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
//     $scope.items = fbItems;
//   });
// };
// getItems();

    let getAirportList = function(){
      PostFactory.getPost().then(function(fbItems){
        $scope.posts = fbItems;
        console.log("THINGS ARE HAPPENING", fbItems)
      });
    };
  // getPost();

});

