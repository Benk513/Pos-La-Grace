import React from 'react'
import { useDispatch } from 'react-redux'
import {Button} from 'antd'

const Item = ({ item }) => {
    const dispatch = useDispatch()


    function addToCart() {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {...item , quantity:1 }
        })
        
    }


  return (
      <div>
          <h4>{item.name.toUpperCase() }</h4>
          <img src={item.image}alt="" width="100" height="100" />
          <h4>Prix :  { item.price}</h4>
          
          <Button
          type='primary'
        onClick={() => addToCart()}>Ajouter un Produit</Button>
    </div>
  )
}

export default Item