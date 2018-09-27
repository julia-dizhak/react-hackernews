import React, { Component } from 'react';

class App extends Component {
    render() {
        const name = 'Julia Dizhak';
        
        return (
            <div className="message">
                <h1>
                    Welcome to React &nbsp;
                    <span>{name}</span>
                </h1>     
            </div>
        );
    }
}

export default App;
