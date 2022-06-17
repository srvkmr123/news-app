import React,{useEffect,useState} from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';


const Entertainment = () => { 
  let [news,setNews]=useState([])
  let [loading,setLoading]=useState(true)

  let [scrollNews, setScrollNews]= useState([]) // less data, to which more data will be added on scroll
  let [fetchedIndex,setFetchedIndex]=useState(-1)
  let [scrollSize]=useState(6)

  useEffect(()=>{
     const getNews=async()=>{
      try{
        const date= new Date()
        const today=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
        let res=await axios.get(`https://newsapi.org/v2/everything?q=entertainment&from=${today}&to=${today}&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
        setNews(res.data.articles)
        setScrollNews(res.data.articles.slice(0,scrollSize))
        setFetchedIndex(scrollSize-1)
        setLoading(false)
      }
      catch(err){
        console.log(err.response.data.message)
      }
     
     }
     getNews()     
     },[])

     const fetchMoreData=()=>{
      setTimeout(()=>{
       setScrollNews(scrollNews.concat(news.slice(fetchedIndex+1,fetchedIndex+1+scrollSize)))
      setFetchedIndex(fetchedIndex+scrollSize)
      },1000)
      
    }

 return (
  <>
    {loading && <Spinner/>}
    <InfiniteScroll
    dataLength={scrollNews.length}
    next={fetchMoreData}
    style={{ overflow:'hidden',textAlign:'center',marginTop:'10' }} //To put endMessage and loader to the top.
   
    hasMore={scrollNews.length!==news.length}
    loader={<Spinner/>}
    >
      <div className="main">
      {scrollNews.map((data,i)=><Card data={data} key={i}/>)}
      </div>
   
  </InfiniteScroll>
  
  </>
  
)
}

export default Entertainment