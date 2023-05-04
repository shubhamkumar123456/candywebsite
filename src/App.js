
import {  useState } from 'react';
import './App.css';
import Input from './UI/Input';
import CartState from './store/CartState'
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import { CartContext } from './store/CartContext';

function App() {

  

  const Candieslist=[
    {
        id:1,
        name:'Eclairs',
        description:'Cloclaty',
        price:2,
        quantity:1
    },
    {
        id:2,
        name:'Mango byte',
        description:'mango flavour',
        price:1,
        quantity:1
    },
    {
        id:3,
        name:'Alpenlibe',
        description:'Coffee toffee',
        price:2,
        quantity:1
    },
    {
        id:4,
        name:'Parle',
        description:'sweet',
        price:4,
        quantity:1
    },
]
const [dummyCandies, setdummyCandies] = useState(Candieslist);

  let arr=[];
  const [item, setitem] = useState(arr);


  const addItemHandle=(items)=>{
    setitem([...item,items])
  }
  // console.log(item)
  return (

    <CartState>
      <Cart length={item.length} items={item}/>
    <Input onAdd={addItemHandle} items={dummyCandies} setitem={setdummyCandies}/>
    <ItemList  items={dummyCandies} onAdd={addItemHandle}/>
    
    </CartState>
  );
}

export default App;
