import React, { useState } from 'react'
import classes from './ItemList.module.css'
const ItemList = (props) => {
    
  
 

    const handleClickBuy1=(name,description,price,quantity)=>{
        // e.preventDefault();
        let obj={
          name,
          desc:description,
          price,
          quantity:quantity
        }
        props.onAdd(obj)
        console.log(name,description,price)
    }
    const handleClickBuy2=(name,description,price,quantity)=>{
        // e.preventDefault();
        let updatedPrice=+price*2
        let updatedQuantity=+quantity*2
        let obj={
          name,
          desc:description,
          price:updatedPrice,
          quantity:updatedQuantity
        }
        props.onAdd(obj)
        console.log(name,description,price)
    }
    const handleClickBuy3=(name,description,price,quantity)=>{
        // e.preventDefault();
        let updatedPrice=+price*3
        let updatedQuantity=+quantity*3
        let obj={
          name,
          desc:description,
          price:updatedPrice,
          quantity:updatedQuantity
        }
        props.onAdd(obj)
        console.log(name,description,price)
    }

  return (
   
    <div className={classes.itemlist}>
        <div className={classes.itemlistNames}>
            <span>quantity</span>
            <span>Candy Name</span>
            <span>description</span>
            <span>price</span>
        </div>
        <div>
        {props.items.map((candy)=>{
        return(
            <div className={classes.itemlistCandy} key={candy.id}>
               <div className={classes.names}>
               <p style={{width:"100px", backgroundColor:"red"}}>{candy.quantity}</p>
                <p  style={{width:"100px", backgroundColor:"red"}}>{candy.name}</p>
                <p  style={{width:"100px", backgroundColor:"red"}}>{candy.description}</p>
                <p  style={{width:"100px", backgroundColor:"red"}}>{candy.price}</p>
               </div>
               <div>
               <button onClick={()=>{handleClickBuy1(candy.name,candy.description,candy.price,candy.quantity)}}>Buy One</button>
                <button onClick={()=>{handleClickBuy2(candy.name,candy.description,candy.price,candy.quantity)}}>Buy two</button>
                <button onClick={()=>{handleClickBuy3(candy.name,candy.description,candy.price,candy.quantity)}}>Buy three</button>
               </div>
            
            </div>
        )
    })}
        </div>
    </div>
    
 
  )
}

export default ItemList
