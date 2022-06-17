import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => {
  return (
    <div className='backdrop' onClick={()=>props.setSidebar(false)}>{props.children}</div>
  )
}

export default Backdrop