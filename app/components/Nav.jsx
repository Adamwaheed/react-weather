var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = (props) => {
     return (
       <div>
           <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
           <Link to="about" activeClassName="active">About</Link>
           <Link to="example" activeClassName="active">Example</Link>
       </div>
     );
};

module.exports = Nav;
