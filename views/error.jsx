var React = require('react');

class ErrorMessage extends React.Component {
  render() {
    return <div><h1> Error {this.props.status} </h1><p> {this.props.error}</p></div>;
  }
}

module.exports = ErrorMessage;