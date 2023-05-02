import React, { useState } from 'react'
import CartItems from './CartItems';

const Cart = (props) => {

    const [showcart, setshowcart] = useState(false);

    const handleCart=()=>{
        setshowcart(!showcart)
    }
  return (
    <div onClick={handleCart} >
    <div>
    <i className='fas fa-shopping-cart'></i>
    {props.length}
      {showcart && <CartItems items={props.items}/>}
     
    </div>
    </div>
  )
}

export default Cart
