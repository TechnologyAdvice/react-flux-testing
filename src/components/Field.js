var React = require('react');

var Field = React.createClass({
  render: function() {
    var label = !this.props.label ? null : <label>{this.props.label}</label>;

    return (
      <div className='field'>
        {label}
        { this.props.children }
      </div>
    );
  }
});

module.exports = Field;
