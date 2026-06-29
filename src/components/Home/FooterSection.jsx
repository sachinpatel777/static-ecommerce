import React from 'react'

function FooterSection() {
    return (
        <footer className='bg-gray-100 py-10'>

            <div className='max-w-7xl mx-auto px-8 flex justify-between items-center'>
                <div>
                    <h2 className='font-semibold'>
                        Atelier
                    </h2>
                    <p className='text-xs text-gray-500 mt-2'>
                    @2026 the digital Atelier all rights reserved.
                    </p>
                </div>

                <div className='flex gap-6 text-xs text-gray-500 uppercase'>
                    <span className='cursor-pointer hover:text-black'>About Us</span>
                    <span className='cursor-pointer hover:text-black'>Contact</span>
                    <span className='cursor-pointer hover:text-black'>Shipping Policy</span>
                    <span className='cursor-pointer hover:text-black'>Terms of Service</span>
                </div>
            </div>

        </footer>
    )

}

export default FooterSection