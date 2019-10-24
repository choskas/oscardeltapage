import React, { Component } from 'react'
import NavBar from './NavBar'
import {Layout, Card} from 'antd'
import {Link} from 'react-router-dom'
import '../App.css'
import FooterR from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
            <Layout>
         <NavBar />
         </Layout>
         <div  style={{height: '85vh', width: 'auto', background: 'url("/images/Fondo corto 1.png")', backgroundRepeat: 'no-repeat', backgroundSize: '100vw 85vh' }}>
         <div style={{display: 'flex', flexDirection: 'row', paddingTop: '15vh'}}>
         <div className='onMobileFirstDiv' style={{display: 'flex', flexDirection: 'column', width:'20vw', marginLeft: '10vw'}}>
             <h2 className='onMobileFirstDiv' style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color: 'white', textAlign: 'right'}}>My lastest projects</h2>
             <p className='onMobileFirstDiv' style={{fontSize: '32px', color: 'white', textAlign: 'right' }}>This are the latest projects <br></br> I made, and I'm happy to share with you</p>
             <Link to='/projects'><img className='onMobileButtonFirstDiv' src='/images/Botón Proyectos.png' alt='boton' style={{width: '20vw', height: '10vh'}}></img></Link>
         </div>
         <div>
             <img className='onMobileMyImage'  src={'/images/Oscar .png'}  style={{width: '60vw',
    height: '70vh'}} alt='aquivalaimagen'/>
    </div> 
    </div>

         </div>


       <div className='onMobileCardContainerHome' style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '100vw', background: 'black'}}>
            
            <Card className='onMobileHomeCards' style={{ width: '25rem', height:'68vh',  paddingRight: '2vw', background: 'black', border: '0px'}}>
                <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>About Me</h2>
                <br></br><br></br>
                <p style={{color: 'white', fontSize: '1.5rem'}}>Gamer, enthusiastic about the new technologies
and how they relate to human relationships.
<br></br>
<br></br>
Creative, i like to solve problems and improve my skills.
<br></br>
<br></br>
I'm always learning.</p>
            </Card>

            <Card className='onMobileHomeCards' style={{ width: '25rem',height:'68vh', paddingRight: '2vw', background: 'black', border: '0px'}}>
            <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>My Work as Web Dev</h2>
            <p style={{color: 'white', fontSize: '1.5rem'}}>For my projects I always seek to be happy with I am doing and that the people I work with fell the same way. 
            <br></br><br></br>I believe the work i have done had helped me to grow both professional and personal
            </p>
            </Card>

            <Card className='onMobileHomeCards' style={{ width: '25rem',height:'68vh', paddingRight: '2vw', background: 'black', border: '0px'}}>
            <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>My Dev Philosophy</h2>
            <p style={{color: 'white', fontSize: '1.5rem'}}>During my life i have learned that the best way to work is to direct yourself by the passion and always be learning new ways to solve problems.
            <br></br><br></br>My ethical values and skills hace helped me to have a good relationship as a leader and as a part of a work team.
            </p>
            </Card>

</div>
 

         <div style={{paddingTop: '5vh' ,height: 'auto', width: 'auto', background: 'url("/images/Fondo corto 2.png")', backgroundRepeat: 'repeat', backgroundSize: '100vw 85vh' }}>
         <h2 style={{fontSize: '38px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>Projects</h2>
         <div className='onMobileCardContainerHome' style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '100vw'}}>
                <Card className='onMobileCardContainerProjects' style={{borderRadius: '5px', width: '20rem',height:'68vh', background: 'black', border: '0px'}}>
                <img src={'/images/teach.png'} style={{width: '18rem', height: '25vh'}} alt={'teach'}></img>
                <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>Teach and Learn</h2>
            <p style={{color: 'white', fontSize: '1.2rem'}}>This project was carried out in a week. It aimed to communicate students with teachers.
            </p>
                </Card>

                <Card className='onMobileCardContainerProjects' style={{borderRadius: '5px', width: '20rem',height:'68vh', background: 'black', border: '0px'}}>
                <img src={'/images/DOM.png'} style={{width: '18rem', height: '25vh'}} alt={'dom'}></img>
                <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>Phantom Ninja Ultra</h2>
            <p style={{color: 'white', fontSize: '1.2rem'}}>My first project as a developer is a Videogame just using canvas and Javascript.
            </p>
                </Card>

                <Card className='onMobileCardContainerProjects' style={{borderRadius: '5px', width: '20rem',height:'68vh', background: 'black', border: '0px'}}>
                <img src={'/images/gamingcouple.png'} style={{width: '18rem', height: '25vh'}} alt={'gaming'}></img>
                <h2 style={{fontSize: '32px', fontFamily: '"Archivo Black", sans-serif', color:'white'}}>The Gaming Couple</h2>
            <p style={{color: 'white', fontSize: '1.2rem'}}>MERN project based on E-Sports, using a REST-Full API.
            </p>
                </Card>
         </div>
         </div>

        <FooterR/>
    
            </div>
        )
    }
}

//modificar onmobile footer
