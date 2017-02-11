var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('openweathermap');
var Weather = React.createClass({
  getInitialState:function(){
    return {
      isloading :false
    }
  },
  handleSearch:function (location) {
    var that = this;
    this.setState({
      isloading:true
    });
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp:temp,
        isloading:false
      });
    },function(errorMessage){
      that.setState({
        isloading:false
      });
    });
  },

  render : function(){
    var {isloading,temp,location} = this.state;

    function RenderMessage(){
      if(isloading){
       return <h3>Featching Weather</h3>;
      }else if(temp && location){
        return  <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm OnSearch={this.handleSearch} />
        {RenderMessage()}
      </div>
     );
  }
});

module.exports = Weather;
