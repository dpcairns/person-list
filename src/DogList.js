import React, { Component } from 'react'

export default class DogList extends Component {
    render() {
        return (
            <div>
                {this.props.dogs.map(dog => <p>{dog.name}</p>)} 
            </div>
        )
    }
}
