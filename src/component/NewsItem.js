import React from 'react'

const NewsItem = (props) => {
  
    
      let {title,description,urlToImage,newsUrl} = props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
          <img src={urlToImage} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
    
  }

