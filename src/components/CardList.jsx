import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return (
    <div className='container'>
        <div className="row mt-3 ">
        {
            props.products.map(product => {
                return(
                    <Card prod={product} key={product.id}/>
                )
            })
        }
        </div>
       
    </div>
        
    )
}

export default CardList