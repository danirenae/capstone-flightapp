
"use strict";

app.controller("AddPostCtrl", function($scope, PostFactory, SearchFactory, $rootScope, $location) {

$scope.airportCodeContainer = true;
$scope.airportCityContainer = false;
$scope.airportCode = {}

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
$scope.newPost = {}

$scope.submitAddNewPost = (submit)=>{
  console.log("SUBMIT HAPPENED", submit);
  $scope.newPost.uid = $rootScope.user.uid;


      $scope.newPost.airportCode = $scope.searchedAirportCode.code;
      $scope.newPost.airportCity = $scope.searchedAirportCode.city;
      $scope.newPost.username = $rootScope.user.username;
      $scope.newPost.timeStamp = new Date();


  PostFactory.postNewPost($scope.newPost).then(function(postId){
    $scope.newPost = {};
    $location.url("/home")
  });
};

// $scope.revealNewPost = function(){
//   $scope.newPostRevealer = true;
// }



//   console.log("$routeParams", $routeParams);
//   $scope.selectedItem = {};
//   let itemId = $routeParams.id;
//   console.log("$routeParams", itemId);

//   ItemFactory.getSingleItem(itemId).then(function(oneItem){
//       oneItem.id = itemId;
//       $scope.selectedItem = oneItem;
//   });
// });






console.log("here is our user names",$scope.newPost);
//  $scope.newPost.username = $rootScope.user.username;


// $scope.addNewPost = function() {
//     $scope.newPost.airportCity = "";
//     $scope.newPost.airportCode = "";
//     $scope.newPost.comment = "";
//     $scope.newPost.waitTime = "";
//     $scope.newPost.timeStamp = function(){
//       //based on materialize docs this will give time
//       var currentTime = new Date();
//       $scope.currentTime = currentTime;
//       $scope.onRender = function () {
//         console.log('onRender');
//       };
//       $scope.newPost.username = $rootScope.user.username; //this should autopopulate username - How?
//       $scope.newPost.uid = $rootScope.user.uid;


//     PostFactory.postNewPost($scope.newPost).then(function(postId){
//       $location.url("/home"); //will this take me to home to view new post?
//       $scope.newPost = "";
//     });
//   };


// assign airport code and city to
// inside .then in controller then assign {{airportCode}}
// this would be $scope.newPost.airportCode

// $scope.newPost = {};
//   $scope.addNewPost = function() {
//           $scope.newPin.uid = $rootScope.user.uid;
//           PostFactory.postNewPin($scope.newPost).then(function(postId) {
//               $location.url("/home/:id");
//               $scope.newPost = {};
//         });
//     };

  });



