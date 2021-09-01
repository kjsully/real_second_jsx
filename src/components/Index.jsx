import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPerson : this.props.person,
            age : this.props.person.age
        }
    }


    increaseAge = () => {
        console.log("clicked")
        this.setState({
            age : this.state.age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Hello Dojo!</h1>
                <p>This I have to do:</p>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the Dogs</li>
                </ul>
                {/* <p>{JSON.stringify(this.state.myPerson)}</p>
                <p>Kyle's age is : {this.state.age} </p>
                <button onClick={this.increaseAge}>increase {this.state.myPerson.name}'s age by +1</button> */}
            </div>
        )
    }
}

export default Index;
