import React from 'react'
import t1 from '../../assets/t1.png'
import t2 from '../../assets/t2.png'
import t3 from '../../assets/t3.png'
import t4 from '../../assets/t4.png'
function TrendingSection(){
    return(
        <section className='max-w-7xl mx-auto px-8 py-16'>
            <div className='flex justify-between items-center mb-10 '>
                <h2 className='text-2xl font-bold'>
                    The Edit: Trending Now
                </h2>
                <span className='text-gray-500 uppercase text-xs cursor-pointer hover:text-black'>
                    view all products
                </span>
            </div>

            <div className='grid grid-cols-4 gap-6'>
{/* resuable product component pending */}
                <div className='group cursor-pointer'>
                    <div className='bg-gray-100 rounded-xl overflow-hidden relative'>
                        <img src={t1} alt="" className='w-full h-[250px] object-cover transition duration-300 group-hover:scale-105'/>
                        <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded uppercase'>
                            sold out
                        </span>
                    </div>

                    <div className='mt-3'>
                        <p className='text-xs font-bold tracking-widest uppercase'>Bags</p>
                        <h2 className='font-medium text-sm'>Architectural Carryall</h2>
                        <p className='text-gray-700'>$450.00</p>
                    </div>
                    
                </div>

                <div className='group cursor-pointer'>
                    <div className='bg-gray-100 rounded-xl overflow-hidden relative'>
                        <img src={t2} alt="" className='w-full h-[250px] object-cover transition duration-300 group-hover:scale-105'/>
                    </div>
                    <div className='mt-3'>
                        <p className='text-xs font-bold tracking-widest uppercase'>Footwear</p>
                        <h2 className='font-medium text-sm'>Monolith Sneaker</h2>
                        <p className='text-gray-700'>$285.00</p>
                    </div>
                </div>

                <div className='group cursor-pointer'>
                    <div className='bg-gray-100 rounded-xl overflow-hidden relative'>
                        <img src={t3} alt="" className='w-full h-[250px] object-cover transition duration-300 group-hover:scale-105'/>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-xs font-bold tracking-widest uppercase'>jewelry</h6>
                        <h2 className='font-medium text-sm'>Textured Band No. 4</h2>
                        <h2 className='text-gray-700'>$195.00</h2>
                    </div>
                </div>

                <div className='group cursor-pointer'>
                    <div className='bg-gray-100 rounded-xl overflow-hidden relative'>
                        <img src={t4} alt="" className='w-full h-[250px] object-cover transition duration-300 group-hover:scale-105'/>
                    </div>
                    <div className='mt-3'>
                        <h6 className='text-xs font-bold tracking-widest uppercase'>knitwear</h6>
                        <h2 className='font-medium text-sm'>Obsidian Cashmere</h2>
                        <h2 className='text-gray-700'>$620.00</h2>
                    </div>
                </div>
                
            </div>
            
            
            
        </section>
    )
}

export default TrendingSection

