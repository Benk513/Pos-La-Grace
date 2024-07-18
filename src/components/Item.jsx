import React from 'react'
import { useDispatch } from 'react-redux'

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
          <h4>TItle</h4>
          <img src="" alt="" width="100" height="100" />
          <h4>Price : 25$</h4>
          <button onClick={()=>addToCart()}>Add to cart</button>
    </div>
  )
}

export default Item