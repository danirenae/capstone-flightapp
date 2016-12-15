"use strict";

app.controller("HomeCtrl", function($scope, SearchFactory, PostFactory, $rootScope){
$scope.searchAir = [];
$scope.searchedCode = {};
$scope.searchedCity = {};
$scope.posts = [];
$scope.newPostRevealer = false;
let allPosts = [];

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
      //all posts function to add all posts for that city
      PostFactory.getPost().then(function(fbItems){
         allPosts = fbItems;
         console.log("THINGS ARE HAPPENING", fbItems)
         getAirportList($scope.searchedCode.code);
      });

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



    let getAirportList = function(codeycode){
      $scope.posts = [];
      allPosts.forEach(function(mypost){
      console.log("mypost inside", mypost );
        if (mypost.airportCode === codeycode){
          $scope.posts.push(mypost)
        };
      console.log("$scope.posts after", $scope.posts )
      });

    };



// $scope.revealNewPost = function(){
//   $scope.newPostRevealer = true;
// }

});

