
import React from 'react'
import { NavLink} from 'react-router-dom'
import './Links.css'

const Link = (props) => {
 
  return (
    <li className='link'><NavLink to={props.to}  className={props.index===props.selIndex?"nav-link active":"nav-link"} onClick={()=>props.setSelIndex(props.index)}>{props.text}</NavLink></li>
  )
}

export default Link
