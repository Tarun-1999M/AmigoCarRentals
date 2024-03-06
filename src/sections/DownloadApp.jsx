import React from 'react'
import familyTravel from "../assets/familyTravel.webp"

const DownloadApp = () => {
  return (
    <div className='bg-gray-200'>
    <div className='flex gap-2 items-center max-container  xl:flex-row flex-col w-full justify-evenly '>
      
      <div className='sm:max-w-lg flex flex-col gap-4 font-montserrat'>
        <p className='text-3xl font-bold'>Download Our App, Rent a Car Easily.</p>
        <p className='text-gray-600'>Embark on a journey of convenience and freedom with just a tap on your screen. Our car rental app is your ultimate travel companion, offering a seamless and personalized car rental experience at your fingertips.</p>
      </div>

      <div>
        <img src={familyTravel} alt="app" className='w-full sm:h-auto h-auto sm:w-96'/>
      </div>
    </div>
    </div>  
  )
}

export default DownloadApp
