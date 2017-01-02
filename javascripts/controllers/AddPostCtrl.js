"use strict";

app.controller("AddPostCtrl", function($scope, PostFactory, SearchFactory, $rootScope, $location) {


$scope.airportCodeContainer = true;
$scope.airportCityContainer = false;
$scope.airportCode = {};

//setting the toggle
$scope.setAirportCodeContainer = function(){
  $scope.airportCodeContainer = true;
  $scope.airportCityContainer = false;
};

$scope.setAirportCityContainer = function(fire){
  $scope.airportCodeContainer = false;
  $scope.airportCityContainer = true;
};

 //search by airport code
$scope.addPostSearchAirportCode = (searchAirportCode)=>{
    console.log("searchAirportCode", searchAirportCode);
    SearchFactory.getAirportSearchCode(searchAirportCode).then((searchAirportCodes)=>{
      console.log(searchAirportCodes);
      $scope.searchedAirportCode = searchAirportCodes;
    });
  };

 //search by airport city
$scope.addPostSearchAirportCity = (searchAirportCity)=>{
    console.log("searchAirportCity", searchAirportCity);
    SearchFactory.getAirportSearch(searchAirportCity).then((searchAirportCities)=>{
      console.log(searchAirportCities);
      $scope.searchedAirportCity = searchAirportCities;
    });
  };

//this will add a new post to the dom in home
$scope.newPost = {};

$scope.submitAddNewPost = (submit)=>{
  console.log("SUBMIT HAPPENED", submit);
  $scope.newPost.uid = $rootScope.user.uid;
      $scope.newPost.airportCode = $scope.searchedAirportCode.code;
      $scope.newPost.airportCity = $scope.searchedAirportCode.city;
      $scope.newPost.username = $rootScope.user.username;
      $scope.newPost.timeStamp = $scope.date;
      //how can I implement this?
      // moment.format('MMMM Do YYYY, h:mm:ss a');
  PostFactory.postNewPost($scope.newPost).then(function(postId){
    $scope.newPost = {};
    $location.url("/home");
  });
};
});