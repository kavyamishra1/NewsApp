import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
          <div className="card">
            
            <div style={{
               display:'flex',
               justifyContent:'flex-end',
               position:'absolute',
               right:'0'
            }}>

          {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%', zIndex:'1'}}> */}
          <span className="badge rounded-pill bg-success">
    {source}
  </span>
            </div>
          <img src={!imageUrl?"https://c.ndtvimg.com/2022-02/qgl54jao_vladimir-putin-afp_625x300_24_February_22.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'> <small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small> </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
          </div>
      </div>
    )
  }
}

export default NewsItem