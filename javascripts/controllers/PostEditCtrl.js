// "use strict";

// app.controller("PostEditCtrl", function($scope, $location, $routeParams, PostFactory){
//   $scope.newPost = {};
//     let itemId = $routeParams.id;


//   PostFactory.getSinglePost(postId).then(function(onePost){
//     onePost.id = postId;
//     $scope.newPost = onePost;
//   });

//    $scope.addNewPost = function (){
//     PostFactory.postItem($scope.newPost).then(function(response){
//       $scope.newPost = {}; //this clears out value
//       $location.url("/items/list");
//     });
//    };
// });