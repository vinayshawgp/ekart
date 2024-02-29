import React, {useEffect, useState} from 'react'
import {HashRouter, BrowserRouter, Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Nav from './Nav'
import Cart from'./Cart'

const App = () => {
  let [prod,setProd]=useState([])
  let [cart,setCart]=useState([])
  let [ctotal,setCtotal]=useState(0)
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
      setProd(res.data.products)
    })
  },[])
  let addcart=(i)=>{
    let res=cart.filter((item,ind)=>{
      if (item.id==prod[i].id){
        inc(ind)
      }
      return item.id==prod[i].id
    })
    if (res.length==0)
    {
      setCart([...cart,{...prod[i],"qty":1}])
      setCtotal((prev)=>prev+prod[i].price)

    }
    
  }
  let inc=(i)=>{
    
    if (cart[i].qty<5){
      cart[i].qty+=1
      setCtotal((prev)=>prev+cart[i].price)
      setCart([...cart])

    }
  
  }
  let dec=(i)=>{
    if (cart[i].qty>1){
      setCtotal((prev)=>prev-cart[i].price)
      cart[i].qty-=1
    setCart([...cart])

    }
    

  }
  let del=(i)=>{
    let x=cart[i].price*cart[i].qty
    setCtotal((prev)=>prev-x)
    cart.splice(i,1)
    setCart([...cart])
  }

  return (
    <HashRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home prod={prod} addcart={addcart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} inc={inc} dec={dec} del={del} ctotal={ctotal}/>}/>
    </Routes>
    </HashRouter>
  )
}

export default App