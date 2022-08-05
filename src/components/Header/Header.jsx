import React from 'react'
import './Header.css'
// import nitesh1  from '../../assets/nitesh.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div>
          <h5>Hello, i'm</h5>
          <h2>Nitesh Sharma</h2>
          <h4>Fullstack Developer</h4>
        </div>
          
          <div>
            <a href="https://drive.google.com/file/d/139L9v_CYCYTROkofWqVFXL6yuAI2Ntgg/view?usp=sharing"><button className='btn'>Download CV </button></a>
            <a href="#contact"><button className='btn'>Let's Talk</button></a>
            
          </div>

          
            <img className='img1' src={'assets/nitesh.png'} alt="nitesh"  />
        

          <div className='media'>
              <a href='https://www.linkedin.com/in/nitesh-sharma-61391a194/'><LinkedInIcon/></a>
              <a href='https://github.com/Nitesh9609'><GitHubIcon/></a>
              <a href='https://www.instagram.com/nitesh_sharma20/'><InstagramIcon/></a>
          </div>
      </div>
    </>
  )
}

export default Header