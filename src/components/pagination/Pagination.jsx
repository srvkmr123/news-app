import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import './Pagination.css'

const Pagination = ({pages,setPage,page}) => {
  
  const handlePrev=()=>{
     if(page>1)
     setPage(page-1)
  }
  const handleNext=()=>{
     if(page<pages)
     setPage(page+1)
}
  return (
    <div className='pages'>
        <button className='prev'><SkipPreviousIcon style={{fontSize:'20'}} name="prevs" onClick={handlePrev} /></button>
        <button className="next"><SkipNextIcon style={{fontSize:'20'}} onClick={handleNext}/></button>
    </div>
  )
}

export default Pagination