import React from 'react'
// import Navigate from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useWish } from '../../context/wishContext'
import toast from 'react-hot-toast'
import { useCart } from '../../context/CartContext'
function ProductCard({ data }) {

    // const navigate = useNavigate()

    const navigate = useNavigate()
    const { toggleWish, wishItems } = useWish();

    const isWishlisted = wishItems.some(
        item => item.id === data.id
    )

    const { addToCart, cartItems, removeById } = useCart();

    const isInCart = cartItems.some(item => item.id === data.id);

    return (
        // <div className='group cursor-pointer ' onClick={navigate="products/:id"}>
        // <div className='group cursor-pointer ' onClick={() => navigate(`/products/${data.id}`)}>

        <div onClick={() => navigate(`/products/${data.id}`)} className='cursor-pointer'>
            <div className='bg-gray-100 rounded-xl overflow-hidden relative'>

                <Heart
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWish(data);
                        toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist")
                    }}
                    className={`absolute top-3 right-3 z-10 cursor-pointer
                        ${isWishlisted ? "fill-red-500 " : "text-gray-400"}`}
                />


                <img src={data.images[0]} alt="" className='w-full h-[200px] object-cover transition duration-300 group-hover:scale-105' />

                {/* <button
                    onClick={(e) => {
                        e.stopPropagation(); // navigation stop
                        if (!isInCart) {
                            addToCart(data, "M", "Black"); // default
                        }
                    }}
                    disabled={isInCart}
                    className={`mt-2 w-full py-2 rounded 
                     ${isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"}`}
                >
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                </button> */}

                {/* <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!isInCart){
                            addToCart(data, "M", "Black")
                        }
                    }}
                    // disabled={isInCart}
                    className={`mt-2 w-full py-2 rounded
                        ${isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"}`}
                >
                    {isInCart ? "Remove From Cart" : "Add To Cart"}
                </button>
                 */}

                <button
                    onClick={(e) => {
                        e.stopPropagation();

                        if (isInCart) {
                            removeById(data.id);
                            toast.success("Removed from cart");
                        } else {
                            addToCart(data, "M", "Black");
                            toast.success("Added to cart");
                        }
                    }}
                    className={`mt-2 w-full py-2 rounded
                        ${isInCart
                            ? "bg-red-500 text-white cursor-pointer"
                            : "bg-black text-white cursor-pointer"
                        }`}
                >
                    {isInCart ? "Remove From Cart" : "Add To Cart"}
                </button>

                {data.tag && (
                    <span className='absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase rounded-full'>
                        {data.tag}
                    </span>
                )}
            </div>
            <div className='mt-3'>
                <p className='text-xs uppercase tracking-widest text-gray-500'>
                    {data.category}
                </p>
                <h3 className='text-sm font-medium'>
                    {data.name}

                </h3>
                <p className='text-gray-800'>
                    ${data.price}
                </p>
            </div>

        </div>
    )
}
export default ProductCard



// import React from 'react'

// function ProductCard({data}){
//     return(
//         <section>
//             <img src={data.image} alt="" />
//             <p>{data.name}</p>
//             <h6>{data.category}</h6>
//             <h1>{data.price}</h1>
//             <h6>{data.tag}</h6>
//         </section>
//     )
// }

// export default ProductCard







