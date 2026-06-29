import { useOrder } from "../context/OrderContext";

function Orders() {
    const { orders } = useOrder();

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>

            {orders.length === 0 ? (
                <p>No Orders Yet</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="border p-4 mb-6 rounded">
                        <p className="text-sm text-gray-500">
                            {order.date}
                        </p>

                        <p className="font-bold mb-2">
                            Total: ₹{order.total}
                        </p>

                        {order.items.map((item, i) => (
                            <div key={i} className="flex gap-4 mb-2">
                                <img
                                    src={item.images[0]}
                                    className="w-16 h-16 object-cover"
                                />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Qty: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;