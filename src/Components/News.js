import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News=(props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

 
  const captialize=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews=async()=>{
    props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
 
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title=`${captialize(props.category)}-NewsPenguin`
   updateNews();
  }, [])
  
 
  const fetchMoreData = async() => {
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`
    setPage(page+1)
    let data =  await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)  
  }

    

    return (
      <>
      
      <div className="container text-center  my-4" style={{color:props.mode==="light"?'black':'white'}}>
        <div className="text-center"><h1 style={{margin:'78px 0px 0px'}}>New$Penguin</h1><br /> 
        <span style={{ fontSize:"28px"}}>Top {captialize(props.category)}  Headlines</span> 
        </div>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
      
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-3 my-4" key={element.url}>
            <NewsItem source={element.source.name} author={element.author?element.author:"Unnamed"} date={element.publishedAt} title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):"Undescriptive"} newsUrl ={element.url} imageUrl={element.urlToImage} />
          </div>
        })}
          
        </div>
        </div>
        </InfiniteScroll>
       
      </div>
      </>
    )
      }


News.defaultProps={
  category: 'general',
  country: 'in',
  pageSize: 8
}

News.propTypes={
  category : PropTypes.string,
  country : PropTypes.string,
  pageSize: PropTypes.number
}

export default News