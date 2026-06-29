import React from 'react'

function TopBar({sort, setSort}) {
    return (
        <section className='mb-10 mx-10'>
            <div>
                <span className='text-xs uppercase tracking-widest bg-gray-800 text-gray-200 rounded-full px-3 py-1 inline-block mb-2'>
                    curated selection
                </span>
                <h1 className='text-3xl font-bold'>
                    The Autumn Collection
                </h1>
                {/* <p className='text-gray-500 text-sm mt-2 max-w-md'>
                    Refined essentials designed for the modern architect of life.
                </p> */}
                <div className='flex justify-between items-end mt-2 gap-2'>
                    <p className='text-gray-500 text-xs mt-2 max-w-md'>
                        Refined essentials designed for the modern architect of life.
                    </p>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="" className='text-sm whitespace-nowrap upp text-gray-700'>Sort By:</label>
                        <select value={sort} onChange={(e)=>setSort(e.target.value)} className='border px-3 py-2 text-sm outline-none rounded-full'>
                            <option value="">New Arrivals</option>
                            <option value="low">Price Low to High</option>
                            <option value="high">Price High to Low</option>
                        </select>
                    </div>

                </div>
            </div>
            {/* 
            <div>
                <label htmlFor="">Sort By:</label>
                <select name="" id="" className='border px-4 py-2 text-sm outline-none rounded-full'>
                    <option value="">New Arrivals</option>
                    <option value="">Price Low to High</option>
                    <option value="">Price High to Low</option>
                </select>
            </div> */}
        </section>
    )
}

export default TopBar










// import React from 'react'

// function TopBar(){
//     return(
//         <section>
//             <div>
//                 <h6>
//                     curated section
//                 </h6>
//                 <h1>
//                     The Autumn Collection
//                 </h1>
//                 <div>
//                     <p>
//                         Refined essentials designed for the modern architect of <br />
//                         life.
//                     </p>
//                     <select name="" id="">Sorted by
//                         <option value="">New Arrivals</option>
//                     </select>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default TopBar