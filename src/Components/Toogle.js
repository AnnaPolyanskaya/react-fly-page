import React, { Component } from 'react'

export default class Toogle extends Component {
    state = {
        on: false
    }

    toogle = () =>{
        this.setState({
            on: !this.state.on,
        });
    }

    render() {
        const { children} = this.props;
        return children({
            on: this.state.on,
            toogle: this.toogle
        })
    }
}
