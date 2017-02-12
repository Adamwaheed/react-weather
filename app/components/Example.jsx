var React = require('react');
var  {Link} = require('react-router');
var Example = (props) =>{
    return (
      <div>
        <h1 className="text-center page-title"> Example</h1>
        <p>Here are a few example  lcoations</p>
        <ol>
          <li>
            <Link to='/?location=Maldives'>Maldives</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>RIo</Link>
          </li>
          <li>
            <Link to='/?location=india'>india</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Example;
