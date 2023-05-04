import React, { useContext, useState } from 'react'
import CartItems from './CartItems';
import { CartContext } from '../store/CartContext';

const Cart = (props) => {

  const ctx= useContext(CartContext)

    const [showcart, setshowcart] = useState(false);

    const handleCart=()=>{
      setshowcart(!showcart);
    }
  return (
    <div  >
    <div>
    <i onClick={handleCart} className='fas fa-shopping-cart'></i>
    {ctx.item.length}
      {showcart && <CartItems  showcart={showcart} setshowcart={setshowcart} handlecart={handleCart}/>}
     
    </div>
    </div>
  )
}

export default Cart
