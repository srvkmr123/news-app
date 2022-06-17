import React from 'react'

import './Drawer.css'

const Drawer = (props) => {

  return (
    <div className='drawer'  >
        <nav>
          <ul className='drawer-ul'>
            {props.children}
          </ul>
       </nav>
    </div>
  )
}

export default Drawer