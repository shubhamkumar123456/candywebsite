import React, { useRef } from 'react'
import './Input.css'

const Input = (props) => {

    let candyName=useRef()
    let candyDescription=useRef()
    let candyPrice=useRef()
    let candyQuantity=useRef()

const handleClick=async(e)=>{
    e.preventDefault();
    let obj={
        name:candyName.current.value,
        description:candyDescription.current.value,
        price:+candyPrice.current.value,
        quantity:+candyQuantity.current.value
    }
    props.setitem([...props.items,obj])

   const response= await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/products',{
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json'
    }
   });
   let data=await response.json();
  //  console.log(data);
    
}

  return (
    <div className='input'>
      <label htmlFor="candy">Candy Name</label>
      <input type="text" ref={candyName} id='candy' placeholder='enter thr candy name' />
      <label htmlFor="description">Description</label>
      <input type="text" ref={candyDescription} id='description' placeholder='write description' />
      <label htmlFor="price">Price</label>
      <input type="text" ref={candyPrice} id='price' placeholder='enter the price of candy' />
      <label htmlFor="quantity">Quantity</label>
      <input ref={candyQuantity} type='number' id='quantity'/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Input
