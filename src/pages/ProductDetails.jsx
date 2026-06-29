

import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useState } from 'react'
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useWish } from '../context/wishContext';
import { useNavigate } from 'react-router-dom';
function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams()

    const product = products.find(p => p.id === Number(id))

    if (!product) return <p className='text-center mt-10'>Product not found</p>

    // const [selectimage, setSelectedImage] = useState(product.images[0])

    const [selectImage, setSelectImage] = useState(product.images[0])
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const { addToCart } = useCart();
    // const { AddToWish } = useWish();
    const { toggleWish, wishItems } = useWish();
    const isWishlisted = wishItems.some(item => item.id === product.id);
    return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 gap-12    ">

            {/* LEFT - IMAGE */}
            <div>
                {/* <img src={product.image} className="rounded-xl w-full" /> */}
                {/* <img src={selectimage} className="rounded-xl w-full" /> */}
                <img src={selectImage} alt="" className='w-full h-[500px] object-cover rounded-xl mb-4' />

                <div className='flex gap-3'>
                    {product.images.map((img, i) => (
                        <img src={img} key={i} onClick={() => setSelectImage(img)}
                            className={`w-20 h-20 object-cover rounded cursor-pointer
                                ${selectImage === img ? "border-black border-2" : ""}`}
                        />
                    ))}
                </div>
            </div>

            {/* <div>
                    <p className="text-sm font-medium">Select Size</p>

                    <div className="flex gap-2 mt-2">
                        {product.sizes.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSelectedSize(s)}
                                className={`px-4 py-2 border rounded
                                ${selectedSize === s
                                    ? "bg-black text-white"
                                    : "hover:bg-gray-100"}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div> */}
            {/* RIGHT - DETAILS */}
            <div className='space-y-5'>
                <p className='text-xs tracking-widest text-gray-400 uppercase'>Premium Collection</p>
                <h1 className='text-3xl font-bold'>{product.name}</h1>
                <p className='text-xl font-semibold'>${product.price}</p>
                <p className='text-gray-500'>{product.description}</p>
                {/* size */}
                <div>
                    <p>Select Size</p>
                    <div className="flex gap-2 mt-2">
                        {product.sizes.map((s) => (
                            <button key={s}
                                onClick={() => setSelectedSize(s)}
                                //  className={`px-4 py-2 border rounded
                                //     ${selectedSize === s
                                //         ? "bg-black text-white"
                                //         : "hover:bg-gray-100"}`}
                                className={`px-4 py-2 border rounded
                                ${selectedSize === s ? "bg-black text-white" : "hover:bg-gray-100"}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                </div>
                {/* color */}
                <div>
                    <p>Select Color</p>
                    <div className="flex gap-2 mt-2">
                        {product.colors.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedColor(c)}
                                className={`w-8 h-8 rounded-full cursor-pointer border  ${selectedColor === c ? "ring-2 ring-black " : ""}`}
                                style={{ backgroundColor: c }}
                            >

                            </button>
                        ))}
                    </div>
                </div>

                {/* button */}
                <div className='space-y-3 pt-4'>
                    {/* <button onClick={()=>{
                        if(!selectedSize) return alert("pls select size")
                        if(!selectedColor) return alert("pls select color")
                        alert("added to card ✅")
                    }}
                        className="w-full bg-black text-white py-3 rounded-lg"
                    >
                        Add to card ✅
                    </button>
                    <button className='w-full border py-3 rounded-lg'>
                        whishlist
                    </button> */}

                    <button
                        onClick={() => {
                            // if (!selectedSize) return alert("pls select size");
                            if (!selectedSize) return toast.error("Please Select Size");
                            // if (!selectedColor) return alert("pls select color");
                            if (!selectedColor) return toast.error("Please Select Color");

                            addToCart(product, selectedSize, selectedColor);

                            // alert("added to cart ✅");
                            toast.success("Added to cart");

                        }}
                        className="w-full bg-black text-white py-3 rounded-lg"
                    >
                        Add to Cart ✅
                    </button>

                    {/* <button className='w-full bg-gray-500 py-3 text-white rounded-lg'
                    onClick={()=>{
                        // AddToWish(product, selectedSize, selectedColor);
                         AddToWish({
                            ...product,
                            size: selectedSize,
                            color: selectedColor
                        });
                        toast.success("Added to wishlist");
                    }}
                    >
                        Add To Wishlist
                    </button> */}
                    <button
                        onClick={() => {
                            toggleWish(product);

                            toast.success(
                                isWishlisted
                                    ? "Removed from wishlist"
                                    : "Added to wishlist"
                            );
                        }}
                        className={`w-full py-3 rounded-lg text-white ${isWishlisted ? "bg-red-500" : "bg-gray-700"
                            }`}
                    >
                        {isWishlisted
                            ? "Remove from Wishlist ❤️"
                            : "Add to Wishlist 🤍"}
                    </button>
                    {/* <Link to="/Order">
                        <button className='w-full py-3 rounded-lg text-white bg-black'>
                            BUY
                        </button>
                    </Link> */}
                    {/* <Link to="/Order"> */}
                        <button onClick={()=>{
                            if(!selectedColor) return toast.error("Please Select Color");
                            if(!selectedSize) return toast.error("Please Select Size");

                            addToCart(product, selectedSize, selectedColor);
                            navigate("/Order");
                        }}
                            className='w-full py-3 rounded-lg text-white bg-black'
                        >
                            BUY
                        </button>
                    {/* </Link> */}
                </div>

                {/* extra */}
                <div className='flex gap-6 text-sm text-gray-500 pt-4'>
                    <p>free delivery</p>
                    <p>30 days returns</p>
                </div>
            </div>
            {/* <div className="space-y-4">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-xl font-semibold">${product.price}</p>

                <button className="bg-black text-white px-6 py-3 rounded">
                    Add to Cart
                </button>
            </div> */}

        </div>
    )
}

export default ProductDetails



// import { useParams } from 'react-router-dom'
// import { products } from '../data/products'
// import { useState } from 'react'

// function ProductDetails() {
//     const { id } = useParams()

//     const product = products.find(p => p.id == Number(id))

//     if (!product) return <p>Product not found</p>

//     // const [selectimage, setSelectedImage] = useState(product.images[0])

//     const [selectImage,setSelectImage] = useState(product.images[0])
//     return (
//         <div className="max-w-6xl mx-auto p-8 grid grid-cols-2 gap-10">

//             {/* LEFT - IMAGE */}
//             <div>
//                 {/* <img src={product.image} className="rounded-xl w-full" /> */}
//                 {/* <img src={selectimage} className="rounded-xl w-full" /> */}
//                 <img src={selectImage} alt="" />
//             </div>

//             {/* RIGHT - DETAILS */}
//             <div className="space-y-4">
//                 <h1 className="text-3xl font-bold">{product.name}</h1>
//                 <p className="text-gray-500">{product.category}</p>
//                 <p className="text-xl font-semibold">${product.price}</p>

//                 <button className="bg-black text-white px-6 py-3 rounded">
//                     Add to Cart
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default ProductDetails


// import { useParams } from "react-router-dom"
// import { useState } from "react"
// import { products } from "../data/products"

// function ProductDetails() {
//   const { id } = useParams()

//   const product = products.find((p) => p.id === Number(id))

//   if (!product) return <p>Product not found</p>

//   // fallback for old products
//   const images = product.images || [product.image]
//   const colors = product.colors || ["black"]
//   const sizes = product.sizes || ["m"]

//   const [selectedImage, setSelectedImage] = useState(images[0])
//   const [selectedSize, setSelectedSize] = useState("")
//   const [selectedColor, setSelectedColor] = useState("")

//   return (
//     <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 gap-12">

//       {/* LEFT SIDE */}
//       <div>
//         {/* Main Image */}
//         <img
//           src={selectedImage}
//           className="w-full h-[500px] object-cover rounded-xl mb-4"
//         />

//         {/* Thumbnails */}
//         <div className="flex gap-3">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => setSelectedImage(img)}
//               className="w-20 h-20 object-cover rounded cursor-pointer border hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="space-y-5">

//         <p className="text-xs tracking-widest text-gray-400 uppercase">
//           Essential Collection
//         </p>

//         <h1 className="text-3xl font-bold">
//           {product.name}
//         </h1>

//         <p className="text-xl font-semibold">
//           ${product.price}
//         </p>

//         <p className="text-gray-500">
//           {product.description || "Premium quality product."}
//         </p>

//         {/* SIZE */}
//         <div>
//           <div className="flex justify-between">
//             <p className="text-sm font-medium">Select Size</p>
//           </div>

//           <div className="flex gap-2 mt-2">
//             {sizes.map((s) => (
//               <button
//                 key={s}
//                 onClick={() => setSelectedSize(s)}
//                 className={`px-4 py-2 border rounded ${
//                   selectedSize === s
//                     ? "bg-black text-white"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 {s.toUpperCase()}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* COLOR */}
//         <div>
//           <p className="text-sm font-medium">Color</p>

//           <div className="flex gap-3 mt-2">
//             {colors.map((c, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedColor(c)}
//                 className={`w-7 h-7 rounded-full cursor-pointer border ${
//                   selectedColor === c ? "ring-2 ring-black" : ""
//                 }`}
//                 style={{ backgroundColor: c }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className="space-y-3 pt-4">
//           <button
//             onClick={() => {
//               if (!selectedSize) return alert("Select size")
//               if (!selectedColor) return alert("Select color")

//               alert("Added to cart ✅")
//             }}
//             className="w-full bg-black text-white py-3 rounded-lg"
//           >
//             Add to Cart
//           </button>

//           <button className="w-full border py-3 rounded-lg">
//             Wishlist
//           </button>
//         </div>

//         {/* EXTRA */}
//         <div className="flex gap-6 text-sm text-gray-500 pt-4">
//           <p>🚚 Free Delivery</p>
//           <p>↩️ 30-Day Returns</p>
//         </div>
//       </div>
//       <div className="mt-16">
//   <h2 className="text-2xl font-bold mb-6">Reviews</h2>

//   <div className="grid grid-cols-3 gap-6">
//     {[1,2,3].map((r) => (
//       <div key={r} className="p-4 border rounded">
//         <p className="font-semibold">User {r}</p>
//         <p className="text-sm text-gray-500">
//           Amazing product quality 🔥
//         </p>
//       </div>
//     ))}
//   </div>
// </div>
//     </section>
//   )
// }

// export default ProductDetails

// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { products } from '../data/products'
// function ProductDetails() {

//   const {id} = useParams()

//   const product = products.find(p => p.id == id)
//   return (
//     <div>
//       {product.price}
//     </div>
//   )
// }

// export default ProductDetails
