import React from 'react'

const Card = (props) => {
    const {price,image,title}=props.prod
  return (
    
    <div className='col-lg-4 prod'>
        <div className="card">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price} AZN</p>
        </div>
        </div>
    </div>
  )
}

export default Card