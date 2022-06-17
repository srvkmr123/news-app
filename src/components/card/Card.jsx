
import React from 'react'

import './Card.css'
const card = (props) => {
   
  
  return (
    <div className='card'>
       <div className="card-header">
         <div className="img">
          {<img src={props.data.urlToImage?props.data.urlToImage:`${process.env.PUBLIC_URL}/images/default-image.jpg`}  alt={props.data.author} loading='lazy' />}
         </div>
          <small>- @{props.data.author || 'anonymous'}</small>
       </div>
       <div className="card-body">
         <h3>{props.data.title}.</h3>
         <p>{props.data.content}...</p>
       </div>
       <div className="card-footer">
        <button className='btn'><a href={props.data.url} target='_blank'>read more &gt;&gt;</a></button>
       </div>
    </div>
  )
}

export default card