import React, { Component, PureComponent } from 'react'
import Component2 from './component2'
import Component3 from './component3'


//using Purecomponent to render things when there is a change in the value of the state using class which has lifcyle mehtod
//componentDidMount() (lifecycle method runs automatcally when there is a change in the state) and it uses render() to render
//anything
export default class Component1 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: "abc"
        }
    }
    // this will be called during mounting ( insertion into DOM )
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "abc"
            })
        }, 2000)
    }

    render() {
        console.log("----------COMP1--------------")
        return (
            <div>Component1
                <Component2 name={this.state.name} />
                <Component3 name={this.state.name} />
            </div>
        )

    }

}