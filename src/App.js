
import { useState } from 'react';
import './App.css';
import Input from './UI/Input';
import Items from './components/Items';
import { ItemContext } from './store/ItemContext';
import ItemList from './components/ItemList';
import Cart from './components/Cart';

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

    <ItemContext.Provider >
      <Cart length={item.length} items={item}/>
    <Input onAdd={addItemHandle} items={dummyCandies} setitem={setdummyCandies}/>
    <ItemList  items={dummyCandies} onAdd={addItemHandle}/>
    {/* <Items/> */}
    </ItemContext.Provider>
  );
}

export default App;
