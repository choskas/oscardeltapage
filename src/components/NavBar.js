import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import '../App.css'
import {Link} from 'react-router-dom'
const { Header } = Layout;

export default class NavBar extends Component {
    render() {
        return (
            <div style={{width: 'auto'}}>
                  
    <Header className="header" style={{background: 'black', height: '15vh', padding: '0 5px', width:'auto'}}>
            <Link to='/'>
     <img style={{height: '15vh', float: 'left', width: '18vw'}} src='/images/Oscar Delta.png' alt='aquideberiaestarellogoalv'></img>
     </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '64px', float:'right', bacground: 'black', marginTop: '2.5vh', fontSize: '2rem', marginRight: '9vw' }}
      >
        
       <Menu.Item key="1" className='MenuNavbar' style={{background: 'black'}}> <Link to='/projects'>Projects </Link></Menu.Item> 
        <Menu.Item key="2" className='MenuNavbar' style={{background: 'black'}}>Contact</Menu.Item>
      </Menu>
      </Header>
      
            </div>
        )
    }
}
