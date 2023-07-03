import React,{useState, useEffect} from 'react'
import './style.css'
import {RxDashboard} from 'react-icons/rx'
import {LuStretchVertical} from 'react-icons/lu'

const ProductsPage=()=> {
  const [Product,setProduct]=useState([]);
  useEffect(()=>{
    fetch(' https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>setProduct(data))
    .catch((error)=>console.error(error));
  },[])
  return (
    <div className='product_container'>
    <div className='icons'>
      <div>
      <button className='button1'>Filter</button>
      </div>
      <div className='icon'>
      <RxDashboard/>
<LuStretchVertical/>
      </div>
      <div>
      <button className='button2'>Sort</button>
      </div>
    </div>
      <div className='container'>
{Product.map((product)=>(
  <div key={product.id} className='product'>
    <img src={product.image} alt={product.title}/>
    <h4>{product.title}</h4>
    <p className='paragraph1'>{product.description}</p>
    <p className='paragraph2'>price:${product.price}</p>
  </div>
))}
      </div>
    </div>
  )
}

export default ProductsPage