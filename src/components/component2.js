import React, { Component, PureComponent } from 'react'

export default class Component2 extends PureComponent {

    render() {

        console.log("----------COMP2--------------")

        return (

            <div>PureComponent {this.props.name} </div>

        )

    }

}