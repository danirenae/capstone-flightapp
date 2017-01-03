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

$scope.deletePost = function(postId){
  PostFactory.deletePost(postId).then(function(response){
    getPosts();
  });
};

$scope.selectedPost = function(thisSelected){
  $scope.selected = thisSelected;
};

$scope.submitUpdatedPost = (submitUpdated)=>{
  PostFactory.editPost(submitUpdated).then(function(postId){
    $location.url("/my-posts");
  });
};
});
