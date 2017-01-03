"use strict";

app.factory("PostFactory", function($q, $http, FIREBASE_CONFIG){
  var getPost = function(){
    return $q((resolve,reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/posts.json`)
        .success(function(response){
          let posts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            posts.push(response[key]);
          });
          resolve(posts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        });
    });
  };

  var postNewPost = function(postypost){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/posts.json`,
          JSON.stringify({
          airportCity: postypost.airportCity,
          airportCode: postypost.airportCode,
          comment: postypost.comment,
          waitTime: postypost.waitTime,
          timeStamp: postypost.timeStamp.getTime(),
          username: postypost.username,
          uid: postypost.uid
        })
      )
        .success(function(postResponse){
          resolve(postResponse);
        })
        .error(function(postError){
          reject(postError);
        });
    });
  };

 var getPostByUid = function(userId){
    return $q((resolve,reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/posts.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(response){
          let posts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            posts.push(response[key]);
          });
          resolve(posts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        });
    });
  };

  var deletePost = function(postId){
    return $q((resolve, reject)=>{
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/posts/${postId}.json`)
      .success(function(deleteResponse){
        resolve(deleteResponse);
      })
      .error(function(deleteError){
        reject(deleteError);
      });
    });
  };

  var getSinglePost = function(postId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/posts/${postId}.json`)
      .success(function(getSingleResponse){
        resolve(getSingleResponse);
      })
      .error(function(getSingleError){
        reject(getSingleError);
      });
    });
  };

 var editPost = function(editPost){
    return $q((resolve, reject)=>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/posts/${editPost.id}.json`,
          JSON.stringify({
          airportCity: editPost.airportCity,
          airportCode: editPost.airportCode,
          comment: editPost.comment,
          waitTime: editPost.waitTime,
          timeStamp: editPost.timeStamp,
          username: editPost.username,
          uid: editPost.uid
        })
      )
        .success(function(editResponse){
          resolve(editResponse);
        })
        .error(function(editError){
          reject(editError);
        });
    });
  };

return {
  getPost:getPost,
  postNewPost:postNewPost,
  getPostByUid:getPostByUid,
  deletePost:deletePost,
  getSinglePost:getSinglePost,
  editPost:editPost
};
});