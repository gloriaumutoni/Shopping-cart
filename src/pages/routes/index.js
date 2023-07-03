import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ProductsPage from '../productspage.tsx'
import Cart from '../cart.tsx'

function Index() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<ProductsPage/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        </Routes> 
    </div>
  )
}

export default Index