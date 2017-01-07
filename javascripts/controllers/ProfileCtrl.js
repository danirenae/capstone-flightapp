"use strict";

app.controller("ProfileCtrl", function($scope, PostFactory, UserFactory, ProfileFactory, $location, $rootScope){

let userById = $rootScope.user.uid;

  $scope.firstName = {};
  $scope.lastName = {};
  $scope.profile = {};
  $scope.user = [];
  $scope.currentProf = {};


    $(document).ready(function(){
    $('.modal').modal();
  });

    let showProfile = function() {
      ProfileFactory.getProfile(userById).then(function(data) {
        $scope.profile = data;
      });
    };
    showProfile();

  let getUserzzz = function () {
 UserFactory.getUser(userById).then((userz)=>{
  $scope.user = userz;
  console.log($scope.user);
 });
};
getUserzzz();


$scope.currentUser = function(userCurrent){
  console.log(userCurrent);
  $scope.currentProf = userCurrent;
};

$scope.submitUpdatedUser = (userUpdateSubmitted)=>{
  PostFactory.editPost(userUpdateSubmitted).then(function(userId){
    $location.url("/profile");
  });
  };

});

