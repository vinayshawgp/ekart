import React from 'react'
import './Home.css'

const Cart = (prop) => {
    let cart=prop.cart
  return (
    
    <div className='prodcon'>
        {cart.length==0 && <div>Cart is empty</div>}
        {cart.length>0 &&
            cart.map((item,i)=>{
                return(
                    <div className='card'>
                        <div className='pimg'>
                            <img src={item.images[0]}/>
                        </div>
                        <div>Price:{item.price}</div>
                        <div>{item.title}</div>
                        <p>{item.description}</p>
                        <div>{item.category}</div>
                        <button onClick={()=>prop.dec(i)}>-</button>{item.qty}<button onClick={()=>prop.inc(i)}>+</button>
                        <button onClick={()=>prop.del(i)}>delete</button>
                        <div>Total amount:{item.price*item.qty}</div>
                        
                        

                        </div>
                )

            })
        }
        {cart.length>0 &&<div>Total cart amount:{prop.ctotal}</div>}
        
        

    </div>
    
    
    
  )
}

export default Cart