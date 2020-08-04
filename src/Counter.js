import React from 'react';

export default class Counter extends React.Component {
    state = { counter: 0 }

    // ALWAYS USE ARROW FUNCTIONS FOR METHODS IN REACT (or else you'll break 'this')
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrementCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>    
                { /* we can see the STATE of the counter */ }
                <div>the counter is {this.state.counter}</div>
                {/* we have a button to INCREASE the state */}
                <button onClick={this.incrementCounter}>increase count</button>
                {/* we have a button to DECREASE the state */}
                <button onClick={this.decrementCounter}>decrease count</button>
            </div>
        );
    }
}