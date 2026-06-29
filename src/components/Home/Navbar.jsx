import React from 'react'
import { ShoppingCart, User, Heart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWish } from '../../context/wishContext';
function Navbar() {
    const { cartItems } = useCart();
    const { wishItems } = useWish();

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    return (
        <nav className='flex justify-between max-w-7xl mx-auto px-8 py-4 items-center bg-white shadow '>
            {/* logo */}
            <div className='text-xl font-bold'>ATELIER</div>

            {/* Menu */}
            <div className='flex gap-6 text-gray-600'>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-semibold border-b-2" : "hover:text-black"}>Home</NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "text-black font-semibold border-b-2" : "hover:text-black"}>Products</NavLink>
                {/* <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? "text-black font-semibold border-b-2" : "hover:text-black"}>New Arrivals</NavLink> */}
                <NavLink to="/Orders" className={({ isActive }) => isActive ? "text-black font-semibold border-b-2" : "hover:text-black"}>Orders</NavLink>
            </div>

            <div className='flex gap-4 '>
                <Link to="/Wish" className='relative'>
                    <Heart className='w-5 h-5 cursor-pointer hover:text-black text-gray-600' />

                    {wishItems.length > 0 && (
                        <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full'>
                            {wishItems.length}
                        </span>
                    )}

                </Link>
                <Link to="/cart" className="relative">
                    <ShoppingCart className='w-5 h-5 cursor-pointer hover:text-black text-gray-600' />

                    {totalItems > 0 && (
                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
                {/* <User className='w-5 h-5 cursor-pointer text-gray-700 hover:text-black' /> */}
            </div>
            {/* <Link to="/cart">Cart</Link> */}



        </nav>
    )
}

export default Navbar
