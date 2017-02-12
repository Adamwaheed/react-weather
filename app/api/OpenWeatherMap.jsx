var axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8cf66c4b224afc479c8dbd01747aaed6&units=imperial';

module.exports = {
  getTemp : function(location){
  var encodedLocations = encodeURIComponent(location);
  var requestsUrl = `${BASE_URL}&q=${encodedLocations}`;
  return  axios.get(requestsUrl).then(function(res){
     if(res.data.cod && res.data.message){
       throw new Error(res.data.message);
     }else{
       return res.data.main.temp;
     }
   },function(e){
      throw new Error(e.data.message);
    });
  }
}
