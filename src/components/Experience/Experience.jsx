import React from 'react'
import Exp from './Exp'
import './Experience.css'

const data = 
[
  {
    
    "skills" : {
     "Frontend_Development":[
         {"name": "HTML", "type": "Experienced"},
         {"name": "JavaScript", "type": "Experienced"},
         {
             "name": "CSS",
             "type": "Intermediate"
         },
         {
             "name": "Bootstrap",
             "type": "Intermendiate"
         },
         {
             "name": "React",
             "type": "Experienced"
         },
     ],
    "Backend_Development":[
     {
         "name": "Node JS",
         "type": "Intermediate"
     },
     {
         "name": "Mongo DB",
         "type": "Intermediate"
     },
     {
         "name": "Python",
         "type": "Beginner"
     }
 ]
    }
 }

]
  
  


  

const Experience = () => {
  return (
    <>
      <div id='experience'>
        <div className='experience'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
        </div>
        
        <div className="experiences">
          
            
              
                {
                  data.map((datas, index) =>(
                    <div className='skills_des'>
                      <div className='frontend'>
                        
                        <h2>Frontend Development</h2>
                        
                        <div>
                          <Exp code1={datas.skills.Frontend_Development}/>
                        </div>
                        
                        
                      </div>
                      <div className='backend'>
                        <h2>Backend Development</h2>
                        <div>
                        <Exp code1={datas.skills.Backend_Development}/>
                        </div>
                        
                      </div>
                    </div>
                    
                    
                    
                  )
                )
                  }
              
          </div>
        
        
      </div>
    </>
  )
}

export default Experience