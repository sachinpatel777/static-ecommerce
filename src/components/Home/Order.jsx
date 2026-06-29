import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";
import { MapPin, CreditCard, Package, ShieldCheck, Truck, Loader2, CheckCircle2 } from "lucide-react";
import { useOrder } from "../../context/OrderContext";
import { useNavigate } from "react-router-dom";
function Order() {
  // const { cartItems } = useCart();
  const { cartItems, removeExactItem } = useCart();
  // const { cartItems, removeById } = useCart();
  const navigate = useNavigate();
  const { addOrder } = useOrder();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cod",
  });
  const [errors, setErrors] = useState({});
  const [orderStatus, setOrderStatus] = useState("idle"); // idle | processing | placed

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = totalPrice > 0 ? 50 : 0;
  const discount = totalPrice > 1000 ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice + shipping - discount;

  const upiId = "demo@upi";
  const payeeName = "MyStore";
  const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    payeeName
  )}&am=${finalTotal.toFixed(2)}&cu=INR&tn=${encodeURIComponent(
    "Order Payment"
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!form.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      return toast.error("Your cart is empty");
    }
    if (!validate()) {
      return toast.error("Please fix the errors before placing your order");
    }

    const orderData = {
      user: form,
      items: cartItems,
      total: finalTotal,
    };
    console.log("ORDER:", orderData);

    setOrderStatus("processing");

    setTimeout(() => {
      setOrderStatus("placed");

      addOrder({
        id: Date.now(),
        items: cartItems,
        total: finalTotal,
        user: form,
        date: new Date().toLocaleTimeString(),
        status: "Placed"
      });

      // cartItems.forEach(item => removeById(item.id));
      cartItems.forEach(item => removeExactItem(item.id, item.size, item.color));
      toast.success(
        form.payment === "cod"
          ? "Order placed successfully (Cash on Delivery)"
          : "Payment successful. Order placed!"
      );
      navigate("/Orders");
    }, 1200);
  };

  const getButtonContent = () => {
    if (orderStatus === "processing") {
      return (
        <>
          <Loader2 size={18} className="animate-spin" />
          Processing...
        </>
      );
    }
    if (orderStatus === "placed") {
      return (
        <>
          <CheckCircle2 size={18} />
          Order Placed
        </>
      );
    }
    return form.payment === "cod" ? "Place Order" : "Pay & Place Order";
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-4">
            {/* STEP 1 - DELIVERY ADDRESS */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 px-5 py-3 border-b bg-gray-50 rounded-t-lg">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-semibold">
                  1
                </div>
                <MapPin size={16} className="text-gray-600" />
                <h2 className="font-semibold text-gray-800">
                  Delivery Address
                </h2>
              </div>

              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Full Name
                  </label>
                  <input
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    disabled={orderStatus !== "idle"}
                    className={`w-full border p-2.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    disabled={orderStatus !== "idle"}
                    className={`w-full border p-2.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Complete Address
                  </label>
                  <textarea
                    name="address"
                    placeholder="House no, street, area, city, state, pincode"
                    value={form.address}
                    rows={3}
                    disabled={orderStatus !== "idle"}
                    className={`w-full border p-2.5 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.address ? "border-red-500" : "border-gray-300"
                      }`}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-4 flex items-center gap-2 text-xs text-gray-500">
                <Truck size={14} />
                <span>Estimated delivery in 3–5 business days</span>
              </div>
            </div>

            {/* STEP 2 - PAYMENT METHOD */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 px-5 py-3 border-b bg-gray-50 rounded-t-lg">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-semibold">
                  2
                </div>
                <CreditCard size={16} className="text-gray-600" />
                <h2 className="font-semibold text-gray-800">
                  Payment Method
                </h2>
              </div>

              <div className="p-5">
                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between gap-3 p-3.5 border rounded-lg cursor-pointer transition ${form.payment === "cod"
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                      } ${orderStatus !== "idle" ? "opacity-60 pointer-events-none" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={form.payment === "cod"}
                        onChange={handleChange}
                        disabled={orderStatus !== "idle"}
                        className="accent-orange-500 w-4 h-4"
                      />
                      <div>
                        <p className="font-medium text-sm text-gray-800">
                          Cash on Delivery
                        </p>
                        <p className="text-xs text-gray-500">
                          Pay with cash when your order arrives
                        </p>
                      </div>
                    </div>
                    <Package size={18} className="text-gray-400" />
                  </label>

                  <label
                    className={`flex items-center justify-between gap-3 p-3.5 border rounded-lg cursor-pointer transition ${form.payment === "upi"
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                      } ${orderStatus !== "idle" ? "opacity-60 pointer-events-none" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={form.payment === "upi"}
                        onChange={handleChange}
                        disabled={orderStatus !== "idle"}
                        className="accent-orange-500 w-4 h-4"
                      />
                      <div>
                        <p className="font-medium text-sm text-gray-800">
                          UPI / Card Payment
                        </p>
                        <p className="text-xs text-gray-500">
                          GPay, PhonePe, Paytm, Debit / Credit Card
                        </p>
                      </div>
                    </div>
                    <ShieldCheck size={18} className="text-gray-400" />
                  </label>
                </div>

                {/* UPI PAYMENT PANEL */}
                {form.payment === "upi" && (
                  <div className="mt-4 p-5 border border-orange-100 rounded-lg bg-orange-50/50">
                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                      {/* QR Code */}
                      <div className="bg-white border rounded-lg p-3 flex flex-col items-center justify-center shrink-0 shadow-sm">
                        <QRCodeSVG
                          value={upiString}
                          size={140}
                          level="M"
                          includeMargin={false}
                        />
                        <span className="text-[10px] text-gray-400 mt-2">
                          Scan with any UPI app
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex-1 w-full">
                        <p className="font-medium mb-3 text-sm text-gray-800">
                          Scan &amp; pay using any UPI app
                        </p>

                        <div className="flex items-center justify-between bg-white border rounded-md px-3 py-2.5 mb-3">
                          <span className="text-sm text-gray-700">
                            UPI ID:{" "}
                            <span className="font-semibold text-gray-900">
                              {upiId}
                            </span>
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(upiId);
                              toast.success("UPI ID copied");
                            }}
                            className="text-xs font-medium text-orange-600 border border-orange-300 rounded px-3 py-1.5 hover:bg-orange-50 transition"
                          >
                            Copy
                          </button>
                        </div>

                        <div className="flex items-center justify-between bg-white border rounded-md px-3 py-2.5 mb-3">
                          <span className="text-sm text-gray-600">
                            Amount Payable
                          </span>
                          <span className="font-semibold text-gray-900">
                            ₹{finalTotal.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs text-gray-500">
                          <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                          <p>
                            100% secure payment. After completing the
                            payment, click "Pay &amp; Place Order" to confirm
                            your purchase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 3 - ORDER ITEMS */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="flex items-center justify-between gap-2 px-5 py-3 border-b bg-gray-50 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-semibold">
                    3
                  </div>
                  <Package size={16} className="text-gray-600" />
                  <h2 className="font-semibold text-gray-800">
                    Order Items
                  </h2>
                </div>
                <span className="text-xs text-gray-500">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="p-5">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-sm text-center py-6">
                    Your cart is empty.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, i) => (
                      <div
                        key={item.id ?? i}
                        className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md border"
                        />

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="font-medium text-sm text-gray-800 line-clamp-1">
                              {item.name}
                            </p>
                            <div className="flex gap-2 mt-1.5 flex-wrap">
                              {item.size && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                  Size: {item.size}
                                </span>
                              )}
                              {item.color && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                  Color: {item.color}
                                </span>
                              )}
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                Qty: {item.quantity}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between items-end mt-2">
                            <span className="text-xs text-gray-500">
                              ₹{item.price.toFixed(2)} each
                            </span>
                            <span className="font-semibold text-sm text-gray-900">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-5 py-3 border-b bg-gray-50 rounded-t-lg">
                <h2 className="font-semibold text-gray-800">
                  Price Details
                </h2>
              </div>

              <div className="p-5">
                <div className="flex justify-between mb-2.5 text-sm text-gray-600">
                  <span>Price ({cartItems.length} items)</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between mb-2.5 text-sm text-green-600">
                    <span>Discount</span>
                    <span>− ₹{discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between mb-2.5 text-sm text-gray-600">
                  <span>Delivery Charges</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                <hr className="my-3 border-dashed" />

                <div className="flex justify-between font-bold text-base text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <p className="text-xs text-green-600 mt-2">
                    You will save ₹{discount.toFixed(2)} on this order
                  </p>
                )}

                <button
                  onClick={handleOrder}
                  disabled={cartItems.length === 0 || orderStatus !== "idle"}
                  className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition disabled:cursor-not-allowed ${orderStatus === "placed"
                    ? "bg-green-600 text-white opacity-100"
                    : "bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
                    }`}
                >
                  {getButtonContent()}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                  <ShieldCheck size={14} />
                  <span>Safe and Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;