var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
    render: function render() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDom.render(
    <Hello name="World" />,
    document.getElementById('AppRoot')
)