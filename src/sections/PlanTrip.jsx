import React from 'react';
import { stepsInBooking, imagesForStepsInBooking } from '../constants';

const PlanTrip = () => {
  return (
    <div className=' my-9 p-9'>
      <div className='text-center max-container'>
        <p className='font-montserrat text-3xl font-bold text-[#191970]'>Your Ride, Your Way</p>
        <h1>Effortless Booking & Enjoyable Journeys</h1>

        <div className='flex xl:flex-row flex-col gap-4 text-center justify-between my-8 font-montserrat'>
          {stepsInBooking.map((step, index) => (
            <div key={index} className='flex flex-col items-center w-50 border-black shadow-2xl p-2'>
              <img src={imagesForStepsInBooking[index].src} alt="" className='w-17 h-10 mx-auto mb-2'/>
              <h2 className='mb-2 text-2xl font-bold'>{step.step}</h2>
              <p className='text-gray-600 text-lg'>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanTrip;
