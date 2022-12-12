import React from 'react'

const Expensive = (props) => {
    const filteredProd=props.products.filter(prod => prod.price>=100)
  return (
    
        <div className="container">
            <div className="row">{

                filteredProd.map(prods=>{
                    return(

                    <div className='col-lg-4 prod' key={prods.id}>
                        <div className="card">
                            <img src={prods.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{prods.title}</h5>
                            <p className="card-text">{prods.price} AZN</p>
                        </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    
  )
}

export default Expensive