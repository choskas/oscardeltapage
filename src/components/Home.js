import React, { Component } from 'react'
import NavBar from './NavBar'
import '../App.css'

export default class Home extends Component {
    render() {
        return (
            <div>
         <NavBar />
         <div style={{height: '60vh', width: '100vw', background: 'blue'}}></div>
            </div>
        )
    }
}
