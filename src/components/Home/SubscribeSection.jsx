import React from 'react'
function SubscribeSection(){
    return(
        <section className='bg-[#0f1b2d] text-white py-20 mt-16'>
            <div className='max-w-3xl mx-auto text-center px-6'>

            <p className='text-gray-400 uppercase text-xs tracking-widest font-semibold mb-4'>
                join the collective
            </p>
            <h3 className='mb-4 text-4xl font-semibold'>
                Journal of the Atelier.
            </h3>
            <p className='text-gray-400 mb-8'>
                Insider access to collection drops. editorial stories, and private events.<br />
                No noise, just inspiration.
            </p>
            <div className='flex justify-center gap-2'>
                <input type="email" placeholder='Your email address' className='p-1 px-4 py-3 w-72 bg-transparent border border-gray-600 text-sm outline-none'/>
                <button className='bg-white text-black px-6 py-3 text-sm font-medium'>subscribe</button>
            </div>
            </div>

        </section>
    )
}

export default SubscribeSection

