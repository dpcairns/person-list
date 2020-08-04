import React from 'react';

export default class Counter extends React.Component {
    // initializing state -- just like the 'let' zone
    state = {
        name: '',
        age: ''
    }

    handleSubmit = (e) => {
        // log out the state and prevent default
        e.preventDefault();
        console.log(this.state)
    }

    handleNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name })
    }

    handleAgeChange = (e) => {
        const age = e.target.value;
        this.setState({ age })
    }

    handleDropdown = (e) => {
        const car = e.target.value;
        this.setState({ car })
    }

    render() {
        // we are returning some form element from our render function.
        // onSubmit, we will call this.handleSubmit, which (around line 11) logs out the value of the form
        return <form onSubmit={this.handleSubmit}>
            <label> 
                Name
                {/* onChange, call this.handleNameChange, which sets the state of Name to the current VALUE of the user's input */}
                <input onChange={this.handleNameChange} />
            </label>
            <label> 
                Age
                <input type="number" onChange={this.handleAgeChange}/>
            </label>

            <select onChange={this.handleDropdown} name="cars" id="cars">
                {
                    this.props.options.map(booger => <option key={booger} value={booger}>{booger}</option>)
                }
            </select>
            <button>Submit</button>
        </form>;
    }
}