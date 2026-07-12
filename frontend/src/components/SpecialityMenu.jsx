import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-3 py-20 text-ink'>
            <p className='font-mono text-xs tracking-[0.2em] text-primary uppercase'>Step one</p>
            <h1 className='font-display text-3xl font-medium'>Find by speciality</h1>
            <p className='sm:w-1/3 text-center text-sm text-muted'>Every category below is staffed by verified, currently-practicing specialists.</p>
            <div className='flex sm:justify-center gap-4 pt-6 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='flex flex-col items-center gap-2 text-xs cursor-pointer flex-shrink-0 bg-white border border-[#E4EEEA] rounded-2xl px-5 py-4 hover:border-primary hover:-translate-y-1.5 hover:shadow-md transition-all duration-300'
                        key={index}
                    >
                        <img className='w-14 sm:w-20' src={item.image} alt="" />
                        <p className='font-medium text-ink'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
