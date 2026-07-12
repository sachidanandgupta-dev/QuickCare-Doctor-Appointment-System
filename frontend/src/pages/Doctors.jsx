import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='font-display text-2xl text-ink font-medium'>{speciality || 'All specialists'}</p>
      <p className='text-muted text-sm mt-1'>Browse verified doctors and book a slot in minutes.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1.5 px-4 border border-primary rounded-full text-sm font-medium transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : 'text-primary'}`}>Filters</button>
        <div className={`flex-col gap-3 text-sm text-muted ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border rounded-full transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-primary-light border-primary text-ink font-medium' : 'border-[#E4EEEA]'}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-5 gap-y-7'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='bg-white border border-[#E4EEEA] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-lg hover:border-primary transition-all duration-300' key={index}>
              <img className='bg-primary-light w-full' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-xs font-medium ${item.available ? 'text-primary' : 'text-muted'}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-primary' : 'bg-[#C4CCC9]'}`}></p><p>{item.available ? 'Available today' : 'Fully booked'}</p>
                </div>
                <p className='font-display text-ink text-lg font-medium mt-1'>{item.name}</p>
                <p className='text-muted text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors