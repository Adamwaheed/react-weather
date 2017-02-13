var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('openweathermap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
  getInitialState:function(){
    return {
      isloading :false
    }
  },
  handleSearch:function (location) {
    var that = this;
    this.setState({
      isloading:true,
      errorMessage: undefined,
      location:undefined,
      temp:undefined
    });
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp:temp,
        isloading:false
      });
    },function(e){

      that.setState({
        isloading:false,
        errorMessage: "City Not found"
      });
    });
  },
 componentDidMount:function(){
   var location = this.props.location.query.location;
   if(location && location.length > 0){
     this.handleSearch(location);
     window.location.hash = "#/";
   }
 },
 componentWillReceiveProps:function (newProp) {
   var location = newProp.location.query.location;
   if(location && location.length > 0){
     this.handleSearch(location);
     window.location.hash = "#/";
   }
 },
  render : function(){
    var {isloading,temp,location,errorMessage} = this.state;

    function RenderMessage(){
      if(isloading){
       return <h3 className="text-center">Featching Weather</h3>;
      }else if(temp && location){
        return  <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderErrorMessage(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal title='Location not found' details={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm OnSearch={this.handleSearch} />
        {RenderMessage()}
        {renderErrorMessage()}
      </div>
     );
  }
});

module.exports = Weather;
