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

  return {
    getProfile: getProfile,
    postProfile: postProfile
  };
});