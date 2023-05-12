import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const CartState=(props)=>{
    
    const itemInitial=[];
    const priceAmount=[];
    const product=[];
    const [item, setItem] = useState(itemInitial);
    const [price, setprice] = useState(priceAmount);
    const [products, setproducts] = useState(product);
    console.log("price arr ",price)


    const addItem=async(items)=>{
        setItem(item.concat(items))
   
 
    }
   
    const lastItem=item[item.length-1]
 

    useEffect(()=>{
        const addCartTObackend=async()=>{
            await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/cart',{
                    method: 'POST',
                    body: JSON.stringify(lastItem),
                    headers: { 'Content-Type': 'application/json'}
                   })
        }
        addCartTObackend()
    },[item,lastItem])

   

    useEffect(()=>{
        const fetchData=async()=>{
         const response=await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/cart',{
           method:'GET',
           headers:{
             'Content-Type': 'application/json'
           }
         })
         const data=await response.json();
         setItem(data)
        //  console.log(data)
        }
        fetchData()
       },[])

    useEffect(()=>{
        const fetchPrice=async()=>{
         const response=await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/price',{
           method:'GET',
           headers:{
             'Content-Type': 'application/json'
           }
         })
         const data=await response.json();
         setprice(data)
        //  console.log(data)
        }
        fetchPrice()
       },[])

  

    const addPrice= async(pri)=>{
        setprice(price.concat(pri))
      
      
    await fetch('https://crudcrud.com/api/1a5c0e0edd6f412ea0cfe179e0199f46/price',{
                        method: 'POST',
                        body: JSON.stringify(pri),
                        headers: { 'Content-Type': 'application/json'}
                       })
          
          
      
    }

    const removeItem=(items)=>{
        const i=items
        console.log(i)
       const filterArr=item.filter(items=>items.name!==i)
       setItem(filterArr)
    }

    const updateItem=(items,itmAdd)=>{
        const i=items
        // console.log(i)
       const filterArr=item.filter(items=>items.name!==i)
       setItem(filterArr)

    //    setItem(item.concat(itmAdd))
    //     const i=items
    //     // console.log(i.name)
    //   const find=  ctx.item.findIndex(itm=>itm.name==i.name)
    //     console.log(find)
        // const filterArr=item.filter(items=>items.name!==i.name)
        // setItem(...item,i)
    //    const index= item.findIndex(itm=>itm.name!==i.name)
    //    const itemobj=item[index];
    //    setItem( item[index]=i)
    //    item[index]=i
    //    console.log(itemobj)

        // const filterArr=item.filter(items=>items.name===i.name)
        // console.log(filterArr)
        // console.log("in state",i)
    }
    const addProduct=(items)=>{
        setproducts(...products,items)
    }

return(
    <CartContext.Provider value={{item,addItem,addPrice,price,removeItem,updateItem,addProduct}}>
        {props.children}
    </CartContext.Provider>
)

}

export default CartState;