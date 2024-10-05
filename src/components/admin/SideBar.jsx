import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './AdminHome'
import AddProduct from './AddProduct'

function SideBar() {
    return (
        <>
            <aside>
                <h2>Side Bar</h2>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Users
                    </li>
                </ul>
            </aside>

            <main>
                <Routes>
                    <Route path='/' element={<AdminHome/>}/>
                    <Route path='/addproduct' element={<AddProduct/>}/>
                </Routes>
            </main>
        </>
    )
}

export default SideBar