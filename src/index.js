import React from 'react';
import ReactDOM  from 'react-dom';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        const { type } = this.props;
        return (
            <div>
                <input 
                    type={type} 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                />
            </div>
        );
    }
}


const App = () => {
    return (
        <div>
            <h2>Input Components</h2>
            <InputComponent type="text" />
            <InputComponent type="password" />
            <InputComponent type="email" />
        </div>
    );
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)