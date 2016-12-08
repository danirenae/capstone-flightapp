

// imgur ajax call example - try something similar with my API
"use strict";
app.factory("SearchFactory", function($q, $http){
  var getAirportSearch = (searchText)=>{
    return $q((resolve,reject)=>{
      $http.get(`https://airport.api.aero/airport/{{airportCode}}?user_key=e31af075f080ff657d91f84df8e0cab6`, {
        headers: {
          'Authorization': 'Client-ID 103d470c3df850b' // what should go here?
        }
      })
      .success( (getAirportSearchResponse)=>{
        console.log("getAirportSearchResponse", getAirportSearchResponse);
        resolve(getAirportSearchResponse);
      })
      .error( (getAirportSearchError)=>{
        reject(getAirportSearchError);
      });
    });
  };
  return {getAirportSearch};
});


//second attempt, but written differently

app.factory("SearchFactory", function($q, $http,){

let apiKeys = {};

var getAirportSearch = (searchText) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: 'apiKeys.json'
    }).then((response) => {
      apiKeys = response;
      let authHeader = 'Client-ID ' + apiKeys.client_id;
      $.ajax({
        method: 'GET',
        headers: {
          'Authorization': authHeader
        },
        //need to change url - ask Zoe about this
        url: `https://airport.api.aero/airport/{{airportCode}} and airport/match/{{searchString}}`
      })
    })
  })
}
});

// "use strict";

// app.factory("ImgurFactory", function($q, $http, FIREBASE_CONFIG) {

// let apiKeys = {};

// var imageList = (searchText) => {
//   return new Promise ((resolve, reject) => {
//     $.ajax({
//       method: 'GET',
//       url: 'imgurAPIKeys.json'
//     }).then((response) => {
//       // console.log("response", response);
//       apiKeys = response;
//       let authHeader = 'Client-ID ' + apiKeys.client_id;

//   $.ajax({
//     method: 'GET',
//     headers : {
//       'Authorization': authHeader
//     },
//     url: `https://api.imgur.com/3/gallery/t/${searchText}`
//   }).then((response) =>{
//     // console.log("imgur response", response);
//     resolve(response.data.items);
//   }, (errorResponse) => {
//     // console.log("imgur fail", errorResponse);
//     reject(errorResponse);
//   });
//     }, (errorResponse) => {
//       console.log("errorResponse", errorResponse);
//     });

//   });
// };

//   return {
//     imageList: imageList
//   };
// });