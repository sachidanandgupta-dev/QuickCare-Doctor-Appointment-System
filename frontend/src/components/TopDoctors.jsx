import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-3 my-20 text-ink md:mx-10'>
            <p className='font-mono text-xs tracking-[0.2em] text-primary uppercase'>Step two</p>
            <h1 className='font-display text-3xl font-medium'>Doctors booking now</h1>
            <p className='sm:w-1/3 text-center text-sm text-muted'>Real-time availability — no waiting on hold to find out.</p>
            <div className='w-full grid grid-cols-auto gap-5 pt-6 gap-y-7 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='bg-white border border-[#E4EEEA] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-lg hover:border-primary transition-all duration-300'
                        key={index}
                    >
                        <img className='bg-primary-light w-full' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-xs font-medium ${item.available ? 'text-primary' : 'text-muted'}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-primary' : 'bg-[#C4CCC9]'}`}></p>
                                <p>{item.available ? 'Available today' : 'Fully booked'}</p>
                            </div>
                            <p className='font-display text-ink text-lg font-medium mt-1'>{item.name}</p>
                            <p className='text-muted text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='border border-primary text-primary font-medium px-12 py-3 rounded-full mt-8 hover:bg-primary hover:text-white transition-all duration-300'>See all doctors</button>
        </div>

    )
}

export default TopDoctors
