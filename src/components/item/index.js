import React, { Component } from 'react'

export default class Iteme extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>{ this.props.item }</li>
        )
    }
}
