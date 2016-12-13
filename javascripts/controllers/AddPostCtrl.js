
"use strict";

app.controller("AddPostCtrl", function($scope, PostFactory, SearchFactory, $rootScope, $location) {


//call to API on the form so that nothing is misspelled
$scope.newPost = {
  username : $rootScope.user.username,
  timeStamp : new Date()
};

//

$scope.addNewPost = function() {
    $scope.newPost.airportCity = "";
    $scope.newPost.airportCode = "";
    $scope.newPost.comment = "";
    $scope.newPost.waitTime = "";
    $scope.newPost.timeStamp = function(){
      //based on materialize docs this will give time
      var currentTime = new Date();
      $scope.currentTime = currentTime;
      $scope.onRender = function () {
        console.log('onRender');
      };
      $scope.newPost.username = $rootScope.user.username; //this should autopopulate username - How?
      $scope.newPost.uid = $rootScope.user.uid;


    PostFactory.postNewPost($scope.newPost).then(function(postId){
      $location.url("/home"); //will this take me to home to view new post?
      $scope.newPost = "";
    });
  };


//assign airport code and city to
inside .then in controller then assign {{airportCode}}
this would be $scope.newPost.airportCode

// $scope.newPost = {};
//   $scope.addNewPost = function() {
//           $scope.newPin.uid = $rootScope.user.uid;
//           PostFactory.postNewPin($scope.newPost).then(function(postId) {
//               $location.url("/home/:id");
//               $scope.newPost = {};
//         });
//     };

  };

});

