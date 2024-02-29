import React from 'react'
import './Home.css'

const Home = (prop) => {
    let prod=prop.prod
  return (
    <div className='prodcon'>
        {
            prod.map((item,i)=>{
                return(
                    <div className='card'>
                        <div className='pimg'>
                            <img src={item.images[0]}/>
                        </div>
                        <div>Price:{item.price}</div>
                        <div>{item.title}</div>
                        <p>{item.description}</p>
                        <div>{item.category}</div>
                        <button onClick={()=>prop.addcart(i)}>addCart</button>
                        

                        </div>
                )

            })
        }
    </div>
    
  )
}

export default Home