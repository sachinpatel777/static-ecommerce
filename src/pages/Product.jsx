
import React from 'react'
import { useState, useEffect } from 'react'
// import { useState } from 'react'
import SideBarSection from '../components/Product/SideBarSection'
import TopBar from '../components/Product/TopBar'

import { products } from '../data/products'
import ProductCard from '../components/Product/ProductCard'
import SideBar from '../components/Product/SideBarSection'
function Product() {

    // const [input, setInput] = useState("")
    // const [search, setSearch] = useState("")

    // const filteredProducts = products.filter((item) => {

    //     // search
    //     // const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
    // // item.name.toLowerCase().includes(search.toLowerCase())

    //     // return matchSearch

    //     const query = search.toLowerCase()

    //     return(
    //         item.name.toLowerCase().includes(query) ||
    //         item.price.toString().includes(query) ||
    //         item.id.toString().includes(query) ||
    //         item.category.toLowerCase().includes(query) ||
    //         item.tag?.toLowerCase().includes(query)
    //     )
    // })

    const [price, setPrice] = useState(1000)

    const [category, setCategory] = useState("")
    const [input, setInput] = useState("")
    const [search, setSearch] = useState("")

    // const [color, setColor] = useState([])
    const [color, setColor] = useState("")

    const [size, setSize] = useState("")

    const [sort, setSort] = useState("")

    const [loading, setLoading] = useState(false)

    // const [loading, setLoading] = useState(false)

    // const [currentPage, setCurrentPage] = useState(1)
    // const productsPerPage = 9

    // const [category, setCategory] = useState([])


    // const [price , setPrice] = useState(1000)

    // const [category, setCategory] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9

    const handleReset = () => {
        setCategory("")
        setColor("")
        setSize("")
        setPrice(1000)
        setSearch("")
    }

    const Productfilter = products.filter((item) => {
        const query = search.toLowerCase()
        // const matchCategory = category === "" || item.category === category


        const finalcategory = category === "" || item.category === category


        const pricerange = item.price <= price

        // const matchcolor = color.length === 0 || color.includes(item.color)

        const matchcolor = color === "" || item.colors === color

        // const matchfilter = category === "" || item.category === category

        // const matchCategory =
        // category.length === 0 || category.includes(item.category)

        // const setprice = item.price <= price

        const matchsize = size === "" || item.sizes === size
        return item.name.toLowerCase().includes(query) && finalcategory && pricerange && matchcolor && matchsize
    })
        .sort((a, b) => {
            if (sort === "low") {
                return a.price - b.price
            }
            if (sort === "high") {
                return b.price - a.price
            }
            return 0
        })

    const indexlast = currentPage * productsPerPage
    const indexfirst = indexlast - productsPerPage

    const currentProducts = Productfilter.slice(indexfirst, indexlast)
    const totalPages = Math.ceil(Productfilter.length / productsPerPage)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [currentPage])

    useEffect(() => {
        setLoading(true)

        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [category, color, size, search, sort, currentPage])

    // useEffect(() => {
    //     setCurrentPage(1)
    // }, [category, color, size, search, sort, price])


    useEffect(() => {
        setCurrentPage(1)
    }, [category, color, size, search, sort, price])
    // useEffect(() => {
    //     setLoading(true)

    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 500)

    //     return () => clearTimeout(timer)
    // }, [category, color, size, search, sort, currentPage])

    // const indexOfLast = currentPage * productsPerPage
    // const indexOfFirst = indexOfLast - productsPerPage

    // const currentProducts = Productfilter.slice(indexOfFirst, indexOfLast)
    // const totalPages = Math.ceil(Productfilter.length / productsPerPage)

    return (
        <section className='max-w-7xl mx-auto px-8 py-8 '>
            <div className='flex'>
                <div className='w-1/4'>
                    {/* <SideBarSection input={input} setInput={setInput} setSearch={setSearch}/> */}
                    <SideBarSection input={input} setInput={setInput} setSearch={setSearch} category={category} setCategory={setCategory} price={price} setPrice={setPrice} color={color} setColor={setColor} setSize={setSize} size={size} />
                </div>
                <div className='w-3/4'>
                    <TopBar sort={sort} setSort={setSort} /><button onClick={handleReset}>Reset Filters</button>
                    <div className='grid grid-cols-3 gap-8'>
                        {/* {loading ? (
                            <p className="text-center col-span-3 ">loading... </p>
                        ) : 
                            currentProducts.length === 0 ? (
                                <p className="text-center col-span-3">No Products Found</p>
                            ) : (
                                currentProducts.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))
                            )} */}
                        {/* {loading ? (
                            <p className="text-center col-span-3">Loading...</p>
                        ) : currentProducts.length === 0 ? (
                            <p className="text-center col-span-3">No Products Found</p>
                        ) : (
                            currentProducts.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))
                        )} */}
                        {loading ? (
                            // <div className="col-span-3 grid grid-cols-3 gap-8 ">
                            //     {Array.from({ length: 9 }).map((_, i) => (
                            //         <div
                            //             key={i}
                            //             className="h-50 bg-gray-200 animate-pulse rounded-2xl"
                            //         ></div>
                            //     ))}
                            // </div>
                            <div className='grid grid-cols-3 gap-8 col-span-3'>
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div key={i} className='h-50 bg-gray-200 animate-pulse rounded-2xl'>
                                    </div>
                                ))}
                            </div>
                        ) : currentProducts.length === 0 ? (
                            <p className="text-center col-span-3">No Products Found</p>
                        ) : (
                            currentProducts.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="flex gap-2 mt-6 justify-center">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={` px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-black text-white" : ""}`}>
                        {i + 1}
                    </button>
                ))}
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(next => next + 1)}>Next</button>

            </div>


            {/* <div className="flex gap-2 mt-6 justify-center">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-black text-white" : ""}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div> */}

        </section>
    )
}

export default Product


// import React from 'react'
// import SideBarSection from '../components/Product/SideBarSection'
// import TopBar from '../components/Product/TopBar'
// import ProductCard from '../components/Product/ProductCard'
// import { products } from '../data/products'
// function Product() {
//     return (
//         <div className='flex max-w-7xl mx-auto mx-5 px-10 py-5'>
//             <div className='w-1/4'>
//                 <SideBarSection />

//             </div>
//             <div className='w-3/4'>
//                 <TopBar />
//                 {products.map((item)=>{
//                     return <ProductCard key={item.id} data={item}/>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Product