import React, { Component } from 'react'
import NavBar from './NavBar'
import {Layout} from 'antd'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Home extends Component {
    render() {
        return (
            <div>
            <Layout>
         <NavBar />
         </Layout>
         <div style={{height: '85vh', width: '100vw', background: 'url("/images/Fondo corto 1.png")', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
         <div style={{display: 'flex', flexDirection: 'row', paddingTop: '15vh'}}>
         <div style={{display: 'flex', flexDirection: 'column', width:'20vw', marginLeft: '10vw'}}>
             <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color: 'white', textAlign: 'right'}}>My lastest projects</h2>
             <p style={{fontSize: '32px', color: 'white', textAlign: 'right' }}>This are the latest projects <br></br> I made, and I'm happy to share with you</p>
             <Link to='/projects'><img src='/images/Botón Proyectos.png' alt='boton' style={{width: '20vw', height: '10vh'}}></img></Link>
         </div>
         <div>
             <img src={'/images/Oscar .png'}  style={{width: '60vw',
    height: '70vh'}} alt='aquivalaimagen'/>
    </div>
         </div>
         </div>
            </div>
        )
    }
}
