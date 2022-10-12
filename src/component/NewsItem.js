import React, { Component } from 'react'

export default class NewsItem extends Component {
 render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" >
          <img src={!imageurl? "https:images.hindustantimes.com/tech/img/2022/09/25/1600x900/fd74dc9be98174092005dbb3aa14dc5f_1664075279569_1664075301201_1664075301201.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
        
        
      </div>
    )
  }
}
