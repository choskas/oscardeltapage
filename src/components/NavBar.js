import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import '../App.css'
const { Header } = Layout;

export default class NavBar extends Component {
    render() {
        return (
            <div>
                   <Layout>
    <Header className="header" style={{background: 'black', height: '15vh'}}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', float:'right', bacground: 'black', marginTop: '2.5vh', fontSize: '2rem' }}
      >
        <Menu.Item key="3" className='MenuNavbar' style={{background: 'black'}}>Home</Menu.Item>
        <Menu.Item key="4" className='MenuNavbar' style={{background: 'black'}}>Projects</Menu.Item>
        <Menu.Item key="5" className='MenuNavbar' style={{background: 'black'}}>Contact</Menu.Item>
      </Menu>
      </Header>
      </Layout>
            </div>
        )
    }
}
