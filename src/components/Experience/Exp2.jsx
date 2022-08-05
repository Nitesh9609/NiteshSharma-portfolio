import React from 'react'
import './Exp2.css'
import VerifiedIcon from '@mui/icons-material/Verified';
const Exp2 = ({name,type}) => {
  return (
    <div className='content'>
        <span><h3><VerifiedIcon/> {name}</h3> <h5>{type}</h5></span>
        
    </div>
  )
}

export default Exp2