import React, { useState } from 'react'

function SideBarSection({ input, setInput, setSearch, category, setCategory, price, setPrice, color, setColor, size, setSize }) {
    // const [search,setSearch] = useState("")

    // const filteredProducts = products.filter((item)=>{

    //     // search
    //     const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())

    //     return matchSearch
    // })
    const handleCategory = (value) => {
        if (category.includes(value)) {
            setCategory(category.filter((item) => item !== value))
        } else {
            setCategory([...category, value])
        }
    }

    // const handlecolor = (value) => {
    //     if (color.includes(value)) {
    //         setColor(color.filter((item) => item !== value))
    //     } else {
    //         setColor([...color, value])
    //     }
    // }

    const handlecolor = (value) => {
        if (color.includes(value)) {
            setColor("")
        } else {
            setColor(value)
        }
    }

    const handlesize = (value) => {
        if (size.includes(value)) {
            setSize("")
        } else {
            setSize(value)
        }
    }
    return (
        <section className='space-y-8'>
            <div>
                {/* <input type="text" placeholder='Search...' className='py-2 bg-gray-400 px-5 rounded-3xl hover:bg-gray-500'/> */}
                <div>
                    {/* <input type="text" placeholder='search...' onClick={setSearch}/> event , value pass*/}
                    <input type="text" placeholder='Search...' className='border-black border-2 rounded-full px-1' onChange={(e) => setInput(e.target.value)} />
                    <button onClick={() => setSearch(input)}>submit</button>
                    {/* <input type="text" placeholder='Search...' className='w-full border rounded-full px-4 py-2 text-sm outline-none' onChange={(e)=> setSearch(e.target.value)}/> */}
                    {/* <input type="text" placeholder='Search...' value={input} className='w-full border rounded-full px-4 py-2 text-sm outline-none' onChange={(e) => setInput(e.target.value)} /> */}
                    {/* <button onClick={()=>setSearch(input)} className='mt-3 w-full bg-black text-white text-sm py-2 rounded-full'>Search</button> */}
                </div>

                <div>
                    <h3 className='text-xs font-semibold uppercase mb-3 mt-3'>categories</h3>
                    
                    <div className='space-y-2 text-sm text-gray-600'>
                        <label className='flex items-center gap-2'>
                            {/* <input type="checkbox" checked={category === ""} onChange={() => setCategory("")} className='accent-black' /> */}
                            {/* <input type="checkbox" checked={category.includes("")} onChange={() => setCategory("")} className='accent-black' /> */}
                            {/* <input type="checkbox" checked={category.length === 0} onChange={() => setCategory([])} className='accent-black' /> */}



                            {/* <input type="checkbox" checked={category === ""} onChange={() => setCategory("")} /> */}

                            <input type="checkbox" checked={category === ""} onChange={() => { setCategory("") }} />



                            <span>All Collection</span>
                        </label>
                        <label className='flex items-center gap-2'>
                            {/* <input type="checkbox" checked={category === "Outerwear"} onChange={() => setCategory("Outerwear")} className='accent-black' /> Outerwear */}
                            {/* <input type="checkbox" checked={category.includes("Outerwear")} onChange={() => handleCategory("Outerwear")} className='accent-black' /> */}


                            {/* <input type="checkbox" checked={category === "Outerwear"} onChange={() => { setCategory("Outerwear") }} /> */}

                            <input type="checkbox" checked={category === "Outerwear"} onChange={() => { setCategory("Outerwear") }} />


                            <span>Outerwear</span>

                        </label>
                        <label className='flex items-center gap-2'>
                            {/* <input type="checkbox" checked={category === "Knitwear"} onChange={() => setCategory("Knitwear")} className='accent-black' /> Knitwear */}
                            {/* <input type="checkbox" checked={category.includes("Knitwear")} onChange={() => handleCategory("Knitwear")} className='accent-black' /> */}




                            {/* <input type="checkbox" checked={category === "Knitwear"} onChange={()=>{setCategory("Knitwear")}} /> */}


                            <input type="checkbox" checked={category === "Knitwear"} onChange={() => { setCategory("Knitwear") }} className='accent-black' />


                            <span>Knitwear</span>
                        </label>
                        <label className='flex items-center gap-2'>
                            {/* <input type="checkbox" checked={category.includes("Accessories")} onChange={() => { handleCategory("Accessories") }} className='accent-black' /> */}






                            {/* <input type="checkbox" checked={category === "Accessories"} onChange={()=>{setCategory("Accessories")}} /> */}



                            <input type="checkbox" checked={category === "Accessories"} onChange={() => { setCategory("Accessories") }} />



                            <span>Accessories</span>
                        </label>
                    </div>
                </div>

                {/* <h1 className='uppercase my-3 font-semibold tracking-widest'>categories</h1> */}
                {/* <div>
                    <input type="checkbox" className='' /> <label>All Collection</label>
                    <div /><input type="checkbox" /> <label htmlFor="">Outerwear</label>
                    <div /><input type="checkbox" /><label htmlFor=""> KneitWear</label>
                    <div /><input type="checkbox" /><label htmlFor="">Accessories</label>
                </div> */}
                {/* <div /> */}

                <div>
                    <h3 className='text-xs font-semibold uppercase mb-3'>Price Range</h3>
                    {/* <input type="range" className='accent-black w-full' min="0" max="1000" value={price} onChange={(e) => setPrice(e.target.value)} /> */}

                    <input type="range" value={price} min="0" max="1000" onChange={(e) => { setPrice(e.target.value) }} />
                    <div className='flex justify-between text-xs text-gray-500 mt-2'>
                        <span>$0</span>
                        <span>${price}</span>
                    </div>
                </div>

                <div>
                    <h3 className='text-xs font-semibold uppercase mb-3'>Colors</h3>
                    <div className='flex gap-3 '>
                        <div onClick={() => handlecolor("black")} className={`w-6 h-6 bg-black rounded-full border sm:w-5 sm:h-5 ${color === "black" ? "ring-2 ring-green-500" : ""}`}></div>
                        {/* <div onClick={() => handlecolor("black")} className={`w-6 h-6 bg-black rounded-full border sm:w-5 sm:h-5 ${color.includes("black") ? "ring-2 ring-green-500" : ""}`}></div> */}
                        <div onClick={() => handlecolor("brown")} className={`w-6 h-6 bg-amber-950 rounded-full border sm:w-5 sm:h-5 ${color === "brown" ? "ring-2 ring-black" : ""}`}></div>
                        {/* <div onClick={() => handlecolor("brown")} className={`w-6 h-6 bg-amber-950 rounded-full border sm:w-5 sm:h-5 ${color.includes("brown") ? "ring-2 ring-black" : ""}`}></div> */}
                        <div onClick={() => handlecolor("gray")} className={`w-6 h-6 bg-gray-600 border rounded-full sm:w-5 sm:h-5 ${color === "gray" ? "ring-2 ring-black" : ""}`}></div>
                        {/* <div onClick={() => handlecolor("gray")} className={`w-6 h-6 bg-gray-600 border rounded-full sm:w-5 sm:h-5 ${color.includes("gray") ? "ring-2 ring-black" : ""}`}></div> */}
                        <div onClick={() => handlecolor("blue")} className={`w-6 h-6 bg-blue-600 rounded-full border sm:w-5 sm:h-5 ${color === "blue" ? "ring-2 ring-black" : ""}`}></div>
                        {/* <div onClick={() => handlecolor("blue")} className={`w-6 h-6 bg-blue-600 rounded-full border sm:w-5 sm:h-5 ${color.includes("blue") ? "ring-2 ring-black" : ""}`}></div> */}
                        <div onClick={() => handlecolor("green")} className={`w-6 h-6 bg-green-700 border rounded-full sm:w-5 sm:h-5 ${color === "green" ? "ring-2 ring-black" : ""}`}></div>
                        {/* <div onClick={() => handlecolor("green")} className={`w-6 h-6 bg-green-700 border rounded-full sm:w-5 sm:h-5 ${color.includes("green") ? "ring-2 ring-black" : ""}`}></div> */}
                    </div>
                </div>

                <div>
                    <h3 className='text-xs font-semibold uppercase mb-3'>Size</h3>
                    <div className='flex gap-2'>
                        <button onClick={()=>{handlesize("xs")}} className={`border px-3 py-1 text-xs sm:px-1 ${size === "xs" ? "ring-2 ring-black " : ""}`}>XS</button>
                        <button onClick={()=>{handlesize("s")}} className={`border px-3 py-1 text-xs sm:px-1 ${size === "s" ? "ring-2 ring-black" : ""}`}>S</button>
                        <button className='border px-3 py-1 text-xs sm:px-1'>M</button>
                        <button className='border px-3 py-1 text-xs sm:px-2'>L</button>
                        <button onClick={()=>{handlesize("xl")}} className={`border px-3 py-1 text-xs sm:px-1 ${size === "xl"}`}>XL</button>
                    </div>
                </div>
                {/* <h1>Orice mode</h1>
                <input type="range" />
                <h1>colors</h1>
                <input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" />
                <h1>size</h1>
                <button>XS</button><button>S</button><button>M</button><button>L</button><button>XL</button> */}
            </div>
        </section>
    )
}
export default SideBarSection