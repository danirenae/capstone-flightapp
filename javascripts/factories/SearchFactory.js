

"use strict";
app.factory("SearchFactory", function($q, $http){
  var getAirportSearchCode = (searchText)=>{
    return $q((resolve,reject)=>{
      $http.get(`https://airport.api.aero/airport/${searchText}?user_key=e31af075f080ff657d91f84df8e0cab6`)
      .success( (getAirportSearchCodeResponse)=>{
        console.log("getAirportSearchCodeResponse", getAirportSearchCodeResponse);
        resolve(getAirportSearchCodeResponse.airports[0]);
      })
      .error( (getAirportSearchCodeError)=>{
        reject(getAirportSearchCodeError);
      });
    });
  };

  var getAirportSearchCity = (searchTextCity)=>{
    return $q((resolve,reject)=>{
      $http.get(`https://airport.api.aero/airport/match/{searchTextCity}?user_key=e31af075f080ff657d91f84df8e0cab6`)
      .success( (getAirportSearchCityResponse)=>{
        console.log("getAirportSearchCityResponse", getAirportSearchCityResponse);
        resolve(getAirportSearchCityResponse.airports[0]);
      })
      .error( (getAirportSearchCityError)=>{
        reject(getAirportSearchCityError);
      });
    });
  };


  return {getAirportSearchCode:getAirportSearchCode, getAirportSearchCity:getAirportSearchCity};
});

