import React from 'react'

const CartItems = (props) => {
    const candies=props.items
  return (
    <div>
      {candies.map((item)=>{
        return (
        <div>
            <p>{item.name}-{item.desc}-{item.price}-{item.quantity}</p>
        </div>
        )
      })}
    </div>
  )
}

export default CartItems
