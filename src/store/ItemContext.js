import { createContext } from "react";

export const ItemContext=createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})