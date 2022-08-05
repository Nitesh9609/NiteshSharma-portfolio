import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ChatIcon from '@mui/icons-material/Chat';
import './Nav.css'


const Nav = () => {
  return (
    <>
    <div className='nav'>
      <nav>
        <a className='aa' href='#'><HomeIcon/></a>
        <a className='aa' href='#about'><PersonIcon/></a>
        <a className='aa' href='#experience'><InfoIcon/></a>
        <a className='aa' href='#project'><AccountTreeIcon/></a>
        <a className='aa' href='#contact'><ChatIcon/></a>
      </nav>

    </div>

    

    </>
  )
}

export default Nav