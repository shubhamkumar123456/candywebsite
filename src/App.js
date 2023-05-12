
import {  useContext, useEffect, useState } from 'react';
import './App.css';
import Input from './UI/Input';

import ItemList from './components/ItemList';
import Cart from './components/Cart';
import { CartContext } from './store/CartContext';

function App() {

  
const Cartctx=useContext(CartContext)
  const Candieslist=[];
const [dummyCandies, setdummyCandies] = useState(Candieslist);


  


 
    useEffect(()=>{
     const fetchData=async()=>{
      const response=await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/products',{
        method:'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const data=await response.json();
      setdummyCandies(data)
      // console.log(data)
     }
     fetchData()
    },[])
  // console.log(item)
  return (

    <>
      <Cart  />
    <Input  items={dummyCandies} setitem={setdummyCandies}/>
    <ItemList  items={dummyCandies} />
    
    </>
  );
}

export default App;
