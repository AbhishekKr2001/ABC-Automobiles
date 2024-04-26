import React, { Component, PureComponent } from 'react'

export default class Component3 extends Component {

    render() {

        console.log("----------COMP3--------------")

        return (

            <div>not pure component {this.props.name} </div>

        )

    }

}