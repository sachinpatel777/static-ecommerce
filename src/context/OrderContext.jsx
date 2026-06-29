import { createContext, useContext, useState, useEffect } from "react";
const OrderContext = createContext();
export function OrderProvider({children}){
    const [orders, setOrders] = useState(()=>{
        const saved = localStorage.getItem("orders");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const addOrder = (order) => {
        setOrders(prev => [...prev, order]);
    };
    
    return (
        <OrderContext.Provider value={{orders, addOrder}}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrder = () => useContext(OrderContext);
// import { createContext, useContext, useState, useEffect } from "react";

// const OrderContext = createContext();

// export function OrderProvider({ children }) {
//     const [orders, setOrders] = useState(() => {
//         const saved = localStorage.getItem("orders");
//         return saved ? JSON.parse(saved) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem("orders", JSON.stringify(orders));
//     }, [orders]);

//     const addOrder = (order) => {
//         setOrders(prev => [...prev, order]);
//     };

//     return (
//         <OrderContext.Provider value={{ orders, addOrder }}>
//             {children}
//         </OrderContext.Provider>
//     );
// }

// export const useOrder = () => useContext(OrderContext);