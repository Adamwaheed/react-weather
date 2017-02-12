var React = require('react');

var About = (props) =>{
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
         <p>this is a weather applications build on React, i have build this for
            the complete react web app developer course.
         </p>
         <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> thus was the
              JavaScript Framwork Used
            </li>
         </ul>
      </div>
    );
};

module.exports = About;
