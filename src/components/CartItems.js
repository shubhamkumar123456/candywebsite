import React, { useContext, useState } from 'react'
import './CartItem.css'
import { CartContext } from '../store/CartContext'
const CartItems = (props) => {
  
  const [update, setupdate] = useState(false);
  const ctx=useContext(CartContext)
  const {item}=ctx
  // console.log(item)
 const arr=[...item]

//  console.log(arr)

// console.log(ctx.price)
  
    let sum=0;



    const handleClick=(value,price)=>{
      // console.log(value)
      // const existingArrItem=arr.findIndex(item=>item.name==value);
      // console.log(ctx.price)
      const existingItem=ctx.item.findIndex(item=>item.name===value);
      // const names=ctx.item[existingItem].name
      // console.log(names)
      const existingPriceItem=ctx.price.findIndex(item=>item.name===value)
      // console.log(existingPriceItem)
      const Price=ctx.price[existingPriceItem].value
      // console.log(price)
      ctx.item[existingItem].quantity=ctx.item[existingItem].quantity+1
      ctx.item[existingItem].price=ctx.item[existingItem].quantity*Price
      setupdate(!update)
       // const originalPrice =ctx.item[existingItem].price
      // console.log(originalPrice)
      // const arrItemPrice=arr[existingArrItem].price
      // arr[existingArrItem].price=originalPrice+originalPrice


      // const existingItemPrice=ctx.item[existingItem].price
      // console.log(existingItemPrice)
      // const existingItemvalue=existingItemPrice
      // const existingItemQuantity=ctx.item[existingItem].quantity+1
      // arr[existingItem].price=existingItemvalue+existingItemvalue
      // ctx.item[existingItem].quantity=existingItemQuantity
     
     
    }




   const handleMinus=(value)=>{
    // console.log(ctx.price)
    const existingItem=ctx.item.findIndex(item=>item.name===value);
    const names=ctx.item[existingItem].name
    const existingPriceItem=ctx.price.findIndex(item=>item.name===value)
    const Price=ctx.price[existingPriceItem].value

    if(ctx.item[existingItem].quantity===1){
      // console.log("null")
      ctx.removeItem(value)
    
      return ctx.item.filter(items=>items.name!=value)
    }
    setupdate(!update)
    ctx.item[existingItem].quantity=ctx.item[existingItem].quantity-1
    ctx.item[existingItem].price-=Price
 
  //  console.log(e.target.parentNode.parentNode.id)
  //  const value=e.target.parentNode.parentNode.id
  //     const existingItem=ctx.item.findIndex(item=>item.name===value);
  //     // console.log(existingItem)
  //     const existingItemPrice=ctx.item[existingItem].price
  //     console.log(existingItemPrice)
  //     ctx.item[existingItem].price=existingItemPrice+existingItemPrice
      // const existingItemvalue=ctx.item[existingItem].price-2
    //   const existingItemQuantity=ctx.item[existingItem].quantity-1
    //   ctx.item[existingItem].price=existingItemvalue
    //   ctx.item[existingItem].quantity=existingItemQuantity
    //   setupdate(!update)
    // console.log(e.target.parentNode.nodeValue)
     
   }

  return (
    <div  className='cart-item'>
     <div className='cart-item-span'>
     <span>Name</span>
     <span>description</span>
     <span>Quantity</span>
     <span>price</span>
     </div>
     <div>
     {item.map((ele)=>{
        return (
        <div className='cart-item-items' key={ele.name} id={ele.name}>
            <p>{ele.name}</p>
            <p>{ele.desc}</p>
            <p>{ele.quantity}{" "} 
             <button onClick={()=>handleClick(ele.name,ele.price)}>+</button>
             <button onClick={()=>handleMinus(ele.name)}>-</button>
            </p>
            <p>{ele.price}</p>
           
        </div>
        )
      })}
     </div>
     {item.filter((total)=>{
      sum+=+total.price
    })}
    <p>Total amount {sum} </p>
  
  <button onClick={()=>{props.setshowcart(false)}}>Close</button>
  <button>Book order</button>
 
    </div>
  )
}

export default CartItems
