declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {
        return (
            <div><h1>React & Node.js on Azure</h1><p>Hello World</p></div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));