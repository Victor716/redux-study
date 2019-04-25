import React, { Component } from 'react'
import Item from '../item'
class List extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }
    render() {
        return (
            <div>
                <span>{ this.props.name }</span>
                <ul>
                    {
                        this.props.list.map(
                            (item, key) => (
                                <Item key={ key } item={ item } />
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}

export default List;