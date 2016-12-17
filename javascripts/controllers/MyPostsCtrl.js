"use strict";

app.controller("MyPostsCtrl", function($scope, SearchFactory, PostFactory, $rootScope){

let userId = $rootScope.user.uid;
$scope.myPost = {};
let allPosts = [];
$scope.posts = [];

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

// edit function from todo - also look at Edit controller and edit in factory
$scope.inputChange = function(thingy){

  PostFactory.editPost(thingy).then(function(response){
    getPosts();
  });
};
});