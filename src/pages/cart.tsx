import React,{useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom';
import productsPage from './productspage'
import './style.css'


export interface Product{
  id:number;
  image:string;
  title:string;
  price:number;
  quantity:number;
  description:string;
}


function Cart() {
 const [CartProducts,setCartProducts]=useState<Product[]>([])

 const DisplayCart =()=>{
  const item: any =localStorage.getItem('product');
  setCartProducts(JSON.parse(item));
  //console.log(JSON.parse(item))
 };
console.log(CartProducts)

useEffect (()=>{
DisplayCart();
},[])

const removeCartItems =(ItemId:number)=>{
  const item: any =localStorage.getItem('product');
  let listOfProducts :any =[];

  listOfProducts =JSON.parse(item);
  let remainingProduct =[];
  if(listOfProducts != null){
    remainingProduct =listOfProducts.filter(
      (item:Product)=>item.id !=ItemId
    );
    localStorage.setItem('product',JSON.stringify(remainingProduct));
    DisplayCart();
  }
}

  return (
    <div className='cart_container'>
      <h2>Cart</h2>
      {}

      <div className='cart'>
        <div>
{CartProducts .map((product)=>(
  <div key={product.id} className='cart_dsiplay'>
    <img src={product.image} alt={product.title} onClick={()=>removeCartItems(product.id)}/> 
    <div className='middle'>

      <div className='flex'>
      <h4>{product.title}</h4>
    <p className='paragraph'>${product.price}</p>
      </div>
    
    <div className='whole'>
    <p className='paragraph'>${product.price}</p>
    <div className='buttons'>
    <button>-</button>
    <span>1{product.quantity}</span>
    <button>+</button>
    </div>
    </div>
   
    </div>
   
  </div>
))}
      </div>
      </div>
    </div>
  )
}

export default Cart