import { createContext, useContext, useEffect, useState } from "react";
// import { useCart } from "./CartContext";

// const { addToCart } = useCart();
const WishContext = createContext();

export function WishProvider({ children }) {
    
    const [wishItems, setWishItems] = useState(() => {
        const saved = localStorage.getItem("wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    // save to localStorage
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishItems));
    }, [wishItems]);

    // ADD / REMOVE (toggle)
    // const toggleWish = (product) => {
    //     const exists = wishItems.find(item => item.id === product.id);

    //     if (exists) {
    //         setWishItems(prev => prev.filter(item => item.id !== product.id));
    //     } else {
    //         setWishItems(prev => [...prev, product]);
    //     }
    // };

    const toggleWish = (product) => {
        setWishItems(prev => {
            const exists = prev.find(item => item.id === product.id);

            if (exists) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return [...prev, product];
            }
        });
    };

    const removeFromWish = (id) => {
        setWishItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <WishContext.Provider value={{
            wishItems,
            toggleWish,
            removeFromWish
        }}>
            {children}
        </WishContext.Provider>
    );
}

export const useWish = () => useContext(WishContext);

// import { createContext, useContext, useEffect, useState } from "react";

// const WishContext = createContext();

// export function WishProvider({children}){

//     const [wishItems, setWishItems] = useState([]);

//     const AddToWish = (product) => {
//         setWishItems(prev => [...prev, product])
//     }
//     return(
//         <WishContext.Provider value={{wishItems, AddToWish}}>
//             {children}
//         </WishContext.Provider>
//     )
// }

// export const useWish = () => useContext(WishContext)