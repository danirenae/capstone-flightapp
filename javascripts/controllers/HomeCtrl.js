"use strict";

app.controller("HomeCtrl", function($scope, SearchFactory, PostFactory, $rootScope){
$scope.searchAir = [];
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
      $scope.searchAir = searchCodes.airportCode;
    });
  };

let getAirportPostsByCode = function(){
  PostFactory.getPost($rootScope.user.airportCode).then(function(fbItems){
    $scope.posts = fbItems;
  })
};
getAirportPostsByCode();

// let getItems = function(){
//    ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
//     $scope.items = fbItems;
//   });
// };
// getItems();




//   //Save search to board
//   $scope.newPin = {};
//   $scope.savePin = (selectedBoard, searchImage)=>{
//     console.log("selectedBoard", selectedBoard);
//     $scope.newPin.pinTitle = searchImage.title;
//     $scope.newPin.boardid = selectedBoard;
//     $scope.newPin.url = searchImage.link;
//     $scope.newPin.uid = $rootScope.user.uid;
//     PinFactory.postNewPin($scope.newPin).then((postResponse)=>{
//       console.log("postResponse", postResponse);
//       $scope.newPin = {};
//     });
//   };
//   $scope.removeSearchImage = function(searchImage) {
//       var index = $scope.searchImages.indexOf(searchImage);
//       $scope.searchImages.splice(index, 1);
//   };
//   $scope.newBoard = function(){
//     $location.url('/boards/new');
//   };
});

