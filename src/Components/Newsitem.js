import React, { Component } from 'react'

const Newsitem=(props)=> {
 
 
    
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div>
      <div className="card" style={{width: "20rem", justifyContent:"center"}}>
      <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/03/19/1600x900/WhatsApp_Image_2023-03-18_at_51522_PM_1679148495753_1679227411594_1679227411594.jpeg" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {source} </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
    <a href={newsUrl} target = "_blank"className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
    )

}

export default Newsitem
