var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  OnSearch:function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value= '';
      window.location.hash = '#/?location='+encodedLocation;
    }
  },
  render:function(){
    return (
      <div className="top-bar">
         <div className="top-bar-left">
            <ul className="menu">
               <li className="menu text">React Weather</li>
               <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
               <li><Link to="about" activeClassName="active">About</Link></li>
               <li><Link to="example" activeClassName="active">Example</Link></li>
            </ul>
         </div>
         <div className="top-bar-right">
            <form onSubmit={this.OnSearch}>
              <ul className="menu">
                <li>
                  <input type="search" ref="search" placeholder="search Weather" />
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>

         </div>
      </div>
    );
  }
});
module.exports = Nav;
