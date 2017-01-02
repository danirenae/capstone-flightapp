"use strict";

app.controller("MyPostsCtrl", function($scope, SearchFactory, PostFactory, $rootScope, $location){

let userId = $rootScope.user.uid;
$scope.myPost = {};
let allPosts = [];
$scope.posts = [];
$scope.selected = {};

  $(document).ready(function(){
    $('.modal').modal();
  });

 let getPosts = function () {
 PostFactory.getPostByUid(userId).then((postByUid)=>{
  $scope.posts = postByUid;
 });
};
getPosts();

// delete function from todo
$scope.deletePost = function(postId){ //passed this in on click here and in HTML - we delete item.id in html and this is why we created items with ids
  console.log("you deleted me");
  console.log(postId);
  PostFactory.deletePost(postId).then(function(response){
    getPosts();
  });
};

$scope.selectedPost = function(thisSelected){
  $scope.selected = thisSelected;
};

// edit function from todo - also look at Edit controller and edit in factory
// $scope.inputChange = function(thingy){
//   PostFactory.editPost(thingy).then(function(response){
//     getPosts();
//   });



  // $scope.updatedPost = {}

$scope.submitUpdatedPost = (submitUpdated)=>{
  console.log("SUBMIT HAPPENED", submitUpdated);
  // $scope.updatedPost.uid = $rootScope.user.uid;
      // $scope.updatedPost.airportCode = $scope.searchedAirportCode.code;
      // $scope.updatedPost.airportCity = $scope.searchedAirportCode.city;
      // $scope.updatedPost.username = $rootScope.user.username;
      // $scope.updatedPost.timeStamp = new Date();
      // $scope.updatedPost.comment = {};
      // $scope
      //how can I implement this?
      // moment.format('MMMM Do YYYY, h:mm:ss a');
  PostFactory.editPost(submitUpdated).then(function(postId){
    // $scope.updatedPost = {};
    $location.url("/my-posts");
  });
};
});




