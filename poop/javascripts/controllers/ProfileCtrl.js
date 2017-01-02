"use strict";

app.controller("ProfileCtrl", function($scope, PostFactory, SearchFactory, ProfileFactory, $rootScope){


  $scope.firstName = {};
  $scope.lastName = {};
  $scope.profile = {};
  $scope.newProfile = {};

  // let showFavorites = function() {
  //   UserProfileFactory.getFavorites($rootScope.user.uid).then(function(data) {
  //     console.log("favroites", data);
  //     $scope.favoriteList = data;
  //   });
  //   };

  //   showFavorites();

    let showProfile = function() {
      ProfileFactory.getProfile($rootScope.user.uid).then(function(data) {
        console.log("profile", data);
        $scope.profile = data;

      });
    };

    showProfile();

  //   $scope.addNewProfile = function() {
  //     $scope.newProfile.uid = $rootScope.user.uid;
  //   UserProfileFactory.postUserProfile($scope.newProfile).then(function(data) {
  //     console.log("new profile", data);
  //     $location.url("/profile");
  //   });
  // };

  // $scope.deleteFavorite = function(favoriteId) {

  //   UserProfileFactory.deleteFavorite(favoriteId).then(function(response) {
  //     showFavorites();
  //   });
  // };

  // $(document).ready(function(){
  //     // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  //     $('.modal').modal();
  //   });
});

