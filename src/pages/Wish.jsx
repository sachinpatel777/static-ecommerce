import { useWish } from '../context/wishContext';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
function Wish() {

    const { addToCart } = useCart();
    const { wishItems, removeFromWish } = useWish();

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

            {wishItems.length === 0 ? (
                // <p className="text-gray-500">No items in wishlist</p>

                <div className='text-center py-20'>
                    <p className='text-2xl font-semibold'>Your Wishlist is Empty 💔</p>
                    <Link to="/products">
                        <button className='mt-4 bg-black text-white px-6 py-2 rounded'>
                            Browse Products
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {wishItems.map((item) => (
                        <div key={item.id} className="border p-4 rounded">

                            <img
                                src={item.images[0]}
                                className="w-full h-40 object-cover rounded"
                            />

                            <h2 className="font-semibold mt-2">
                                {item.name}
                            </h2>

                            <p className="text-gray-500">${item.price}</p>

                            <div className="flex gap-2 mt-3">

                                <Link to={`/products/${item.id}`}>
                                    <button className="border px-3 py-1 rounded">
                                        View
                                    </button>
                                </Link>

                                <button
                                    onClick={() => removeFromWish(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Remove
                                </button>

                                <button
                                    onClick={() => {
                                        addToCart(item, item.size || "M", item.color || "Black");
                                        removeFromWish(item.id);
                                    }}
                                    className='bg-black text-white px-3 py-1 rounded'
                                >
                                    Move To Cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wish;
// import React from 'react'
// import { useWish } from '../context/wishContext'
// function Wish() {
//     const { wishItems } = useWish();
//     return (
//         <div>
//             <p>Wish List</p>
//             {wishItems.length === 0 ? ( <p>No wish list</p>
//         ): (
//             <>
//             {wishItems.map((s,i)=>(
//                 <div key={i}>
//                     {s.name}
//                     <div>
//                         <img src={s.images[0]} alt={s.name} className='w-12 h-12 rounded-md'  />
//                     </div>
//                 </div>
//             ))}
//             </>
//          )}
//         </div>
//     )
// }

// export default Wish
