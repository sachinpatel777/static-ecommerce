import React from 'react'
import Category1 from '../../assets/Category1.png'
import Category2 from '../../assets/Category2.png'
import Category3 from '../../assets/Category3.png'
function CategorySection(){
    return(
       <section className='max-w-7xl mx-auto px-8 py-16'>
        <div className='mb-10'>
            <h2 className='text-2xl font-semibold'>
            Curated Worlds
            </h2>
            <p className='text-gray-500 mt-2'>
                Explore our specilied ctegories designed for every dimension of life.
            </p>
        </div>
        
        <div className='grid grid-cols-3 gap-6'>
            <div className='relative group overflow-hidden rounded-xl'> 
                <img src={Category1} alt="" className='w-full h-[400px] object-cover transition duration-300 group-hover:scale-105 grayscale-25'/>
                <div className='absolute inset-0 bg-black/40'></div>
            
                <div className='absolute bottom-6 left-6 text-white'>
                    <p className='text-xs tracking-widest uppercase'>Collection</p>
                    <h3 className='text-xl font-semibold'>Women</h3>
                </div>
            </div>

            <div className='relative group overflow-hidden rounded-xl translate-y-5'> 
                <img src={Category2} alt="" className='w-full h-[400px] object-cover transition duration-300 group-hover:scale-105 grayscale-25'/>
                <div className='absolute inset-0 bg-black/30'></div>

                <div className='absolute bottom-6 left-6 text-white'>
                    <p className='text-xs tracking-widest uppercase'>Collection</p>
                    <h3 className='text-xl font-semibold'>Men</h3>
                </div>
            </div>

            <div className='relative group overflow-hidden rounded-xl'> 
                <img src={Category3} alt="" className='w-full h-[400px] object-cover transition duration-300 group-hover:scale-105 grayscale-25'/>
                <div className='absolute inset-0 bg-black/30'></div>

                <div className='absolute bottom-6 left-6 text-white'>
                    <p className='text-xs tracking-widest uppercase'>Collection</p>
                    <h3 className='text-xl font-semibold'>Accessories</h3>
                </div>
            </div>
        </div> 
       </section>
    )
}

export default CategorySection

// import React, { Component } from 'react'

// export class CategorySection extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default CategorySection
