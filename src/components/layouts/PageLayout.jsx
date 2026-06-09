import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Product from '../Product/Product'

const PageLayout = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-start justify-start'>
<Navbar/>
    
            <Outlet />

        </div>
    )
}

export default PageLayout
