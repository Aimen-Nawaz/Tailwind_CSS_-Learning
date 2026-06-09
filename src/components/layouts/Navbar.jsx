import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='w-full px-3 py-3 bg-black opacity-50 '>
            <div className='w-full max-w-7xl mx-auto flex items-center justify-between gap-4'>
                <h1 className='text-white'>Product App</h1>
                <ul className='flex items-center justify-between gap-3 text-white'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/Posts'>Posts</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                </ul>
            </div>
        </header>
     

    )
}

export default Navbar
