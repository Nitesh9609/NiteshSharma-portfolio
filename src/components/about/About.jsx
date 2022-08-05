import React from 'react'
import './About.css'
// import nitesh2 from '../../assets/nitesh2.png'

var data = [
  {
      "name": "Experience",
      "note": "6 month Working"
  },
  {
      "name": "Clients",
      "note": "1 Working"
  },
  {
      "name": "Projects",
      "note": "10+ Completed"
  }
]

const About = () => {
  return (
    <>
    <div id='about'>
      <div className='about_heading'>
        <h5>Get To Know </h5>
        <h2>About Me</h2>
      </div>
      
      <div className='about_body'>
        <div >
          <img className='img2' src={'assets/nitesh2.png'} alt='nitesh2' width='max contant'/>
        </div>

        <div className='about_body_2'>
          <div className='blocks'>
            {
              data.map((datas,key)=>(
                <div >
                  <h4>{datas.name}</h4>
                  <h6>{datas.note}</h6>
                </div>
              )
            )}
          </div>
          <div className='note'>
          I’m a Web Development Engineer. I enjoy creating, designing, and experimenting with things. I’ve also been developing some interesting and meaningful projects. I’m always interested in becoming a better Engineer, Contributor, Team member, Human and in meeting interesting people.
          
          
          </div>
          <div className='chat_btn'>
            <a href="#contact"><button className='btn'>Let's Chat</button></a>
            
          </div>
        </div>
        
        
      </div>
      
    </div>
    </>
    
  )
}

export default About