

// imgur ajax call example - try something similar with my API
"use strict";
app.factory("SearchFactory", function($q, $http){
  var getAirportSearch = (searchText)=>{
    return $q((resolve,reject)=>{
      $http.get(`https://airport.api.aero/airport/${searchText}?user_key=e31af075f080ff657d91f84df8e0cab6`)
      .success( (getAirportSearchResponse)=>{
        console.log("getAirportSearchResponse", getAirportSearchResponse);
        resolve(getAirportSearchResponse);
      })
      .error( (getAirportSearchError)=>{
        reject(getAirportSearchError);
      });
    });
  };
  return {getAirportSearch:getAirportSearch};
});

