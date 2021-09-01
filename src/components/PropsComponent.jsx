import React, { Component } from 'react';

class PropsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPerson: this.props.person
        }
    }
    
    render() {
        return (
            <div>
                <p>My Props Component</p>
                <p>{this.props.message}</p>
                <p>{this.props.animals}</p>
            </div>
        )
    }
}

export default PropsComponent;