import React, { Component } from 'react'
import { Layout} from 'antd';
import '../App.css'

const { Footer } = Layout;

export default class FooterR extends Component {
    render() {
        return (
            <div className='onMobileFooterDiv' style={{width: 'auto'}}>
                  
                  <Footer style={{background: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', height: '20vh', width: '99vw', padding: '0px', paddingTop: '10px', margin: '0px' }} >
            <div style={{display: 'flex', justifyContent: 'space-around',width: '50%'}}>
            <img src={'/images/ironhack-988x1024.png'} style={{height: '80%'}} alt='ironhack'></img>
            <img src={'/images/cert.png'} alt='cert' style={{height: '80%'}}></img>
            </div>

            <div >
            <h2 style={{fontSize: '20px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>Contact</h2>
            <p style={{color: 'white', fontSize: '1.1rem'}}>Mobile: 55-28-62-56-79 <br></br> Linkedin: <a href='www.linkedin.com/in/oscardelta'> Oscar Delta</a> <br></br> E-mail: choskasdelta@gmail.com
            </p>
            </div>
        </Footer>
      
            </div>
        )
    }
}
