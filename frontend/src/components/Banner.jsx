import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='relative flex bg-ink rounded-2xl overflow-hidden px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            <div className='pointer-events-none absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-primary/25 blur-3xl'></div>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-10'>
                <p className='font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3'>Ready when you are</p>
                <div className='font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white'>
                    <p>Book your visit</p>
                    <p className='mt-2'>with 100+ trusted doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-accent text-sm sm:text-base text-ink font-semibold px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create free account</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative z-10'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner
