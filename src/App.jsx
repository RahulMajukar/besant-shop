import React from 'react'
import UserLayout from './components/users/UserLayout'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './components/admin/AdminLayout'
import AdminHome from './components/admin/AdminHome'
import AddProduct from './components/admin/AddProduct'
import Footer from './components/common/Footer'

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<UserLayout />} />
        
        
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} /> {/* Admin home page */}
          <Route path="add-product" element={<AddProduct />} /> {/* Add product page */}
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App