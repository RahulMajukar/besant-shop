import React from 'react'
import Footer from '../common/Footer'
import ProductList from './ProductList'

function UserLayout() {
  return (
    <div>
        <div className="container">
        <ProductList/>
        </div>
      

        <Footer/>
    </div>
  )
}

export default UserLayout