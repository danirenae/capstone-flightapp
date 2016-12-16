"use strict";

app.controller("MyPostsCtrl", function($scope, SearchFactory, PostFactory, $rootScope){

let userId = $rootScope.user.uid;
$scope.myPost = {};
let allPosts = [];
$scope.posts = [];

 PostFactory.getPostByUid(userId).then((postByUid)=>{
  console.log("postByUid", postByUid);
  $scope.posts = postByUid;
 })

//delete function from todo
// $scope.deleteItem = function(itemId){ //passed this in on click here and in HTML - we delete item.id in html and this is why we created items with ids
//   console.log("you deleted me");
//   ItemFactory.deleteItem(itemId).then(function(response){
//     getItems(); //once it is deleted then refresh the DOM
//   });
// };

//edit function from todo - also look at Edit controller and edit in factory
// $scope.inputChange = function(thingy){
//   ItemFactory.editItem(thingy).then(function(response){
//   });
// };







// $scope.putMyPostToDOM = function(putPost){
//   $scope.posts =[];
//   allPosts.forEach(function(postByUid){
//     console.log("POST BY UID", postByUid);
//     //how can I write this to grab the current user?
//     //would it be better to use a filter?
//       if(postByUid.uid === uid.current)
//         $scope.posts.push(postByUid);
//   })
// }
//   putMyPostToDOM($scope.);


});