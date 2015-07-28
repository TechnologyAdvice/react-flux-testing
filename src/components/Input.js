var React = require('react');
var Field = require('./Field');

var Input = React.createClass({
  componentDidMount: function() {
    this.elm = $(React.findDOMNode(this.refs.popper));

    if (this.props.dataContent) {
      this.elm.popup({
        on: 'focus'
      });
    }
  },
  render: function() {
    var icon =
      !this.props.iconClass ?
      null : <i className={this.props.iconClass}></i>;

    return (
      <Field label={ this.props.label }>
        <div
          className={
            'ui left ' +
            (this.props.iconClass ? 'icon ' : '') +
            'input'}
          >
          <input
            name={this.props.name}
            type={this.props.type || 'text'}
            defaultValue={this.props.defaultValue}
            data-content={this.props.dataContent}
            ref='popper'
          />
          {icon}
        </div>
      </Field>
    );
  }
});

module.exports = Input;
