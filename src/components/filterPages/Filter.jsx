import React,{useState,useEffect} from 'react'
import Card from '../card/Card'

const Filter = (props) => {
  const [data,setData]=useState([])

  useEffect(()=>{
    const arr=props.news.filter((n,i)=>(i>=props.start && i<=props.end))
    setData(arr)
  },[props])
  return (
    <>
      {data.map((v,i)=><Card data={v} key={i}/>)}
    </>
  )
}

export default Filter
//news.map((data,i)=><Card key={i} data={data}/>)