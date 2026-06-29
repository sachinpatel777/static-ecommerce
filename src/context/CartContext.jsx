




import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    // SAVE TO LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    const addToCart = (product, size, color) => {
        const existingItem = cartItems.find(
            item =>
                item.id === product.id &&
                item.size === size &&
                item.color === color
        );
        if (existingItem) {
            // increase quantity
            setCartItems(prev =>
                prev.map(item =>
                    item === existingItem
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            const newItem = {
                ...product,
                size,
                color,
                quantity: 1
            };

            setCartItems(prev => [...prev, newItem]);
        }
    };

    const removeFromCart = (index) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    const removeById = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const updateQuantity = (index, amount) => {
        setCartItems(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeExactItem = (id, size, color) => {
        setCartItems(prev =>
            prev.filter(item =>
                !(item.id === id && item.size === size && item.color === color)
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            removeById,
            removeExactItem 
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);










// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product, size, color) => {
//         const newItem = {
//             ...product,
//             size,
//             color,
//             quantity: 1
//         };

//         setCartItems(prev => [...prev, newItem]);
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export const useCart = () => useContext(CartContext); 