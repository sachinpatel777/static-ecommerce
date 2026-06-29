

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex gap-6 border p-4 rounded">

                                <img
                                    src={item.images[0]}
                                    className="w-24 h-24 object-cover"
                                />

                                <div className="flex-1">
                                    <h2 className="font-bold">{item.name}</h2>
                                    <p>Size: {item.size}</p>
                                    <p>Color: {item.color}</p>
                                    <p>${item.price}</p>

                                    {/* QUANTITY */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => {updateQuantity(i, -1); toast.success("decrese   quantity")}}
                                            className="px-3 border"
                                        >-</button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => {updateQuantity(i, 1); toast.success("increse quantity")}}
                                            className="px-3 border"
                                        >+</button>
                                    </div>
                                </div>

                                {/* REMOVE */}
                                <button
                                    onClick={() => {removeFromCart(i); toast.success("Remove from cart") }}

                                    className="text-red-500"
                                >
                                    Remove
                                </button>

                            </div>
                        ))}
                    </div>

                    {/* TOTAL */}
                    <div className="mt-10 text-right">
                        <h2 className="text-2xl font-bold">
                            Total: ${totalPrice}
                        </h2>

                        <Link to="/Order">
                            <button className="mt-4 bg-black text-white px-6 py-3 rounded">
                                Checkout
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;

// import { useCart } from "../context/CartContext";

// function Cart() {
//     const { cartItems } = useCart();

//     return (
//         <div className="max-w-6xl mx-auto p-8">
//             <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//             {cartItems.length === 0 ? (
//                 <p>Cart is empty</p>
//             ) : (
//                 <div className="space-y-6">
//                     {cartItems.map((item, i) => (
//                         <div key={i} className="flex gap-6 border p-4 rounded">
//                             <img
//                                 src={item.images[1  ]}
//                                 className="w-24 h-24 object-cover"
//                             />

//                             <div>
//                                 <h2 className="font-bold">{item.name}</h2>
//                                 <p>Size: {item.size}</p>
//                                 <p>Color: {item.color}</p>
//                                 <p>${item.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Cart;    