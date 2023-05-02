import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'
const Items = () => {
  const item=useContext(ItemContext)
  return (
    <div>
     {item.map((element)=>{
     return console.log(element)
     })}
    </div>
  )
}

export default Items
