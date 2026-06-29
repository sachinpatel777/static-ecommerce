import React from 'react';
import mainhero from '../../assets/MainHero.png'
import sidehero from '../../assets/SideHero.png'
function HeroSection() {
    return (
        <section className='max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 gap-8 items-center min-h-[80vh]'>
            {/* <div className='grid grid-cols-2 px-10 gap-10'> */}
            <div className='flex items-center h-full'>
                <div className=' space-y-6  '>
                    <span className='bg-blue-100 text-xs px-3 py-1 uppercase tracking-widest inline-block' >
                        summer collection 2026
                    </span>

                    <h1 className='text-6xl font-bold leading-tight text-gray-900'>
                        The New <br /> Standard
                    </h1>

                    <p className='text-gray-500 max-w-md leading-relaxed'>
                        Curated essentials for the modern minimalist. Crafted with architectural precision and eternal style.
                    </p>

                    <button className='bg-black text-white px-6 py-3 rounded-md text-sm tracking-wide'>
                        SHOP NEW ARRIVALS
                    </button>
                </div>  
            </div>

            <div className='relative flex justify-center h-full items-center'>
                {/* <img src={mainhero} alt="Hero Image" className='rounded-xl shadow-xl rotate-[-2deg]' /> */}
                <img src={mainhero} alt="Hero Image" className='h-[100vh] object-cover rounded-xl shadow-xl' />
                <img src={sidehero} alt="side image" className='absolute bottom-[-30px] left-[-40px] w-40 border-8 border-white shadow-lg rotate-[2deg]' />
            </div>
            {/* </div> */}
        </section>

    )
}

export default HeroSection


// import React from 'react';

// function HomeSection(){
//     return(
//        <div>
//         <div>
//             <h3>summer collection 2026</h3>
//             <h1>The New Standard</h1>
//             <p>Curated essentials for the modern minimalist. <br />
//                 Crafted with architectural precision and eternal <br />
//                 style.
//             </p>
//             <button>SHOP NEW ARRIVALS</button>
//         </div>
//         <div>
//             <img src="/MainHero.png" alt="Hero Image" />
//             <img src="/SideHero.png" alt="side image" />
//         </div>
//        </div>
//     )
// }

// export default HomeSection
