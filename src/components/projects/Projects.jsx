import React from 'react'
import './Projects.css'

var data = [
  {
      "image":"assets/monster.png",
      "content": "Monster Rolodex",
      "github_url":"https://github.com/Nitesh9609/monsters",
      "vercel_url":"https://monsters-beta.vercel.app/"
  },
  {
      "image":"assets/gym exercise.png",
      "content": "Gym Exercise",
      "github_url":"https://github.com/Nitesh9609/gym-exercises",
      "vercel_url":"https://gym-exercises.vercel.app/"
  },
  {
    "image":"assets/employee dashboard.png",
    "content": "Employee Dashboard",
    "github_url":"https://github.com/Nitesh9609/employee-management-system-frontend",
    "vercel_url":"https://employee-management-system-frontend-henna.vercel.app/"
},
{
  "image":"assets/shopmart.png",
  "content": "Shop Mart",
  "github_url":"https://github.com/Nitesh9609/shopping24.github.io",
  "vercel_url":"https://shoppingcc.vercel.app/"
},
{
  "image":"assets/fitnessmania.png",
  "content": "Fitness Mania",
  "github_url":"https://github.com/Nitesh9609/Fitness-Mania",
  "vercel_url":"https://fitness-mania.vercel.app/"
}
]

const Projects = () => {
  return (
    <div id='project'>
      <div className='portfolio_projrct'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      </div>
      

      <div className='project_card'>
      {
        data.map(datas =>(
          <div className='project'>
            <div className='img_div'>
            <img className='image3' src={datas.image} alt='hello'/>
            </div>
          <div>
          <h4>{datas.content}</h4>
          </div>
          <div>
            <a href={datas.github_url}><button className='btn' >Github Link</button></a>
          
          <a href={datas.vercel_url}><button className='btn'>Live Demo</button></a>
          
          </div>
          
          </div>

          
        ))
      }
      </div>
      
    </div>
  )
}

export default Projects