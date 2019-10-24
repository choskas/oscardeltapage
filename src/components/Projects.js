import React, { Component } from 'react'
import {Button} from 'antd'
import NavBar from './NavBar'
import FooterR from './Footer'

export default class Projects extends Component {
    render() {
        return (
            <div>
            
                <NavBar/>

                <div style={{background: 'url("/images/Fondo corto 1.png")', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 'auto', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh', paddingTop: '10vh'}}>
                <div><img style={{height: '50vh', width: '40vw'}} src={'/images/DOM.png'} alt='DOM'></img></div>
                <div>
                    <h2>Phantom Ninja Ultra DOM Edition</h2>
                    <p>This is a videogame based on a friend's game.</p>
                    <p></p>
                    </div>
                </div>

                <div style={{background: 'url("/images/Fondo corto 2.png")', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 'auto', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh', paddingTop: '10vh'}}>
                <div>
                    <h2>Teach and Learn</h2>
                    <p>This is a WebApp based on Node.js,</p>
                    <p></p>
                    </div>
                    <div><img style={{height: '50vh', width: '40vw'}} src={'/images/teach.png'} alt='Teach'></img></div>
               
                </div>

                <div style={{background: 'url("/images/Fondo corto 1.png")', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 'auto', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh', paddingTop: '10vh'}}>
                <div><img style={{height: '50vh', width: '40vw'}} src={'/images/gamingcouple.png'} alt='Gaming Couple'></img></div>
                <div>
                    <h2>The Gaming Couple</h2>
                    <p>A Full-stack MERN app.</p>
                    <p></p>
                    <Button type='dashed'>View Project</Button>
                    <Button type='dashed'>View GitHub</Button>
                    </div>
                </div>
                
                <FooterR />
               
            </div>
        )
    }
}
