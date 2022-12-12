import React from 'react'
import CardList from '../components/CardList'

const Index = (props) => {
  return (
    <div>
        <CardList products={props.products}/>
    </div>
  )
}

export default Index