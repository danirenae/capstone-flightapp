"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navItems = [
    {
      name: "Logout",
      url: "#/logout"
    },
    {
      name: "Home",
      url: "#/home"
    },
    {
      name: "Profile",
      url: "#/profile"
    },
    {
      name: "Add Post",
      url: "#/add-post"
    },
    {
      name: "My Posts",
      url: "#/my-posts"
    }
  ];
});