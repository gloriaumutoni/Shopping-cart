import React,{useState, useEffect} from 'react'
import './style.css'
import {RxDashboard} from 'react-icons/rx'
import {LuStretchVertical} from 'react-icons/lu'
import { Link } from 'react-router-dom'


export interface Product{
  id:number;
  image:string;
  title:string;
  price:number;
  description:string;
}


const ProductsPage=()=> {
  const [Products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    fetch(' https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>{setProducts(data)})
    .catch((error)=>console.error(error));
  },[])

  const handleAddToCart=(product:Product)=>{
const item:any =localStorage.getItem('product');
let listOfProducts:any=[];
console.log(JSON.parse(item));

listOfProducts =JSON.parse(item);
if(listOfProducts ===null){
  listOfProducts=[];
  listOfProducts.push(product);
}
else{
  listOfProducts.push(product);
}
console.log(listOfProducts,product);
localStorage.setItem('product',JSON.stringify(listOfProducts));
  }

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
{Products.map((product)=>(
  <div key={product.id} className='product'>
   <Link to='/cart'><img src={product.image} alt={product.title} onClick={()=>handleAddToCart(product)}/></Link> 
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










// {`/cart/${product.id}`}