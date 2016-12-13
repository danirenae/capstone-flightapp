"use strict";

app.factory("ProfileFactory", function($q, $http, FIREBASE_CONFIG) {

  let getProfile = function(user) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/profiles.json?orderBy="uid"&equalTo="${user}"`)
      .success(function(response) {
        let profiles = [];
        Object.keys(response).forEach(function(key) {
          response[key].id = key;
          profiles.push(response[key]);
        });
        resolve(profiles);
      })
      .error(function(getSingleError) {
        reject(getSingleError);
      });
    });
  };

  let postProfile = function(newProfile) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/profiles.json`,
        JSON.stringify({
          fullname: newProfile.fullname,
          username: newProfile.username,
          uid: newProfile.uid,
          homeairport: newProfile.homeairport
        })
      )
      .success(function(postResponse) {
        resolve(postResponse);
      })
      .error(function(postError) {
        reject(postError);
      });
    });
  };


  // let getFavorites = function (userId) {
  //   return $q((resolve, reject) => {
  //     $http.get(`${FIREBASE_CONFIG.databaseURL}/favorites.json?orderBy="uid"&equalTo="${userId}"`)
  //     .success(function(response) {
  //       let favorites = [];
  //       Object.keys(response).forEach(function(key) {
  //         response[key].id = key;
  //         favorites.push(response[key]);
  //       });
  //       resolve(favorites);
  //     })
  //     .error(function(getFavError) {
  //       reject(getFavError);
  //     });
  //   });
  // };

  // let deleteFavorite = function(favoriteId) {
  //   return $q((resolve, reject) => {
  //     $http.delete(`${FIREBASE_CONFIG.databaseURL}/favorites/${favoriteId}.json`)
  //     .success(function(deleteResponse) {
  //       resolve(deleteResponse);
  //     })
  //     .error(function(deleteError) {
  //       reject(deleteError);
  //     });
  //   });
  // };

  return {
    getProfile: getProfile,
    postProfile: postProfile
  };
});