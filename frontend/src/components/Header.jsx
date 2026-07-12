import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative flex flex-col md:flex-row flex-wrap bg-ink rounded-2xl px-6 md:px-10 lg:px-20 overflow-hidden'>

            {/* subtle background texture */}
            <div className='pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl'></div>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[8vw] md:mb-[-30px] relative z-10'>
                <p className='font-mono text-xs tracking-[0.2em] text-accent uppercase'>Same-day slots, real doctors</p>
                <p className='font-display text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight md:leading-tight lg:leading-tight'>
                    Care that fits <br className='hidden sm:block' /> your calendar, not the other way around.
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white/70 text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Browse verified specialists and lock in a visit <br className='hidden sm:block' /> in under two minutes.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-accent px-8 py-3 rounded-full text-ink font-semibold text-sm m-auto md:m-0 hover:brightness-105 hover:scale-[1.03] transition-all duration-300'>
                    Find a doctor <img className='w-3 invert' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative min-h-[280px] z-10'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />

                {/* Signature element: floating appointment ticket */}
                <div className='hidden lg:flex absolute top-8 right-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden'>
                    <div className='flex-1 p-4'>
                        <p className='font-mono text-[10px] tracking-widest text-muted uppercase'>Confirmed slot</p>
                        <p className='font-display text-base text-ink font-medium mt-1'>Dr. Meera Iyer</p>
                        <p className='text-xs text-muted'>Dermatologist</p>
                        <div className='mt-3 border-t border-dashed border-[#D6E4E0] pt-3 flex items-center justify-between'>
                            <div>
                                <p className='font-mono text-[10px] text-muted'>TODAY</p>
                                <p className='font-mono text-sm text-ink font-medium'>4:30 PM</p>
                            </div>
                            <span className='flex items-center gap-1 text-[10px] font-medium text-primary bg-primary-light px-2 py-1 rounded-full'>
                                <span className='w-1.5 h-1.5 rounded-full bg-primary'></span> On time
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
