import React, { Component } from 'react'

export default class DropdownFilter extends Component {
    render() {
        return (
        <select onChange={this.props.handleDogType}>
            {
                this.props.options.map(booger => <option key={booger} value={booger}>{booger}</option>)
            }
        </select>
        )
    }
}
