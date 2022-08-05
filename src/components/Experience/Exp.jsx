import React from 'react'
import Exp2 from './Exp2'

const Exp = ({code1}) => {
  return (
    <div>
        {
            code1.map(codes=>{
                return(<Exp2
                    name={codes.name}
                    type={codes.type}
                />)
                
            })
        }
    </div>
  )
}

export default Exp