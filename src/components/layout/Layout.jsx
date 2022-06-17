import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Layout.css'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Links from '../links/Links'
import { linkData } from '../../data';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../drawer/Drawer';
import Backdrop from '../backdrop/Backdrop';

const Layout = (props) => {
const location =useLocation()
const [initial,setInitial]=useState('')
const [sidebar,setSidebar]=useState(false)

useEffect(()=>{
  const arr=['/','/business','/entertainment','/technology','/sports']
  const i= arr.find((a,j)=>{
    if(a===location.pathname)
    return j;
  })
  setInitial(i)
},[location.pathname])
const [selIndex,setSelIndex]= useState(initial)
  return (
    <>
     {sidebar&&<Backdrop setSidebar={setSidebar}>
      <Drawer>
        {linkData.map((data,i)=><Links to={data.to} text={data.text} key={i} index={i} selIndex={selIndex} setSelIndex={setSelIndex}/>)}
      </Drawer></Backdrop>}
     <div className="layout-header">
       <h2><NewspaperIcon style={{fontSize:'40'}}/>&nbsp; NewsHub</h2>
       <nav>
           <ul className='layout-ul'>
               {linkData.map((data,i)=><Links to={data.to} text={data.text} key={i} index={i} selIndex={selIndex} setSelIndex={setSelIndex}/>)}
           </ul>
       </nav>
       <div className="ham" onClick={()=>setSidebar(true)}>
        <MenuIcon/>
       </div>
      
     </div>
     <div className="layout-body">
       <div className="body-heading">
       {props.heading==='Error'? <h2 >Error(404) - Page donot exists</h2>: <h2 >NewsHub - Top {props.heading} Headlines</h2>}
       </div>
        {props.children}
     </div>
    
    </>
  )
}

export default Layout