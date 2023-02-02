import React from 'react'

const NewsItem =(props)=> {

    let {title, description,imageUrl, newsUrl ,date, source} = props;
    return (
    <>
        <div className="card"  >
       
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'13%'}}>
        <span >{source}</span></span>

          <img src={imageUrl?imageUrl:"https://img.etimg.com/thumb/msid-96633272,width-1070,height-580,imgsize-52800,overlay-economictimes/photo.jpg"} className="card-img-top" alt="/" style={{height:"163px"}}/>
            <div className="card-body" style={{display:'grid'}}>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small style={{fontSize:"12px"}} className="text-muted">On {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl}  style={{background: "#000000c4", color:'white'}} rel="noreferrer" target="_blank" className="btn btn-sm ">Read more</a>
            </div>
        </div>
   </>
    )
  
}

export default NewsItem