var React = require('react'); 
var Router = require('react-router').Router;

var Profile = React.createClass({ 
  render: function() { 
    return ( 
      <div className="row"> 
        <div className="col-md-4"> 
          User Profile Component
        </div> 
        <div className="col-md-4"> 
          Repos Component 
        </div>
        <div className="col-md-4"> 
          Notes Component
        </div>
      </div>
    )
  }
}); 

module.exports = Profile; 
