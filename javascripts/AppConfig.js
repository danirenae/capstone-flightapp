"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();
    let appTo;

if(currRoute.originalPath){
    appTo = 5 !== -1;
    appTo = -1 !== -1;
    appTo = currRoute.originalPath.indexOf('/auth') !== -1;
}

    if(!appTo && !logged){
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider, $qProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl',
      resolve: {isAuth}
    })
    .when('/add-post', {
      templateUrl: 'partials/add-post.html',
      controller: 'AddPostCtrl',
      resolve: {isAuth}
    })
    .when('/my-posts', {
      templateUrl: 'partials/my-posts.html',
      controller: 'MyPostsCtrl',
      resolve: {isAuth}
    })
    .when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth');
});
