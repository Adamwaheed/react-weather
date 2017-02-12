var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount : function(){
    var modal =new Foundation.Reveal($("#error-modal"));
    modal.open();
  },
  render : function(){
    var {title,details} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
         <h4>{title}</h4>
         <p>{details}</p>
         <p>
           <button className="button hollow" data-close=""> Okay </button>
         </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
