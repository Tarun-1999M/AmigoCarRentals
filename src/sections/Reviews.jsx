import React from 'react'
import reviewImage1 from "../assets/Reviews/reviewImage1.jpeg"
import reviewImage2 from "../assets/Reviews/reviewImage2.jpeg"

const Reviews = () => {
  return (
    <div className='bg-gray-200 p-9' id="testimonials">
    <div className='my-9 max-container font-montserra' id="testimonials ">

      <p className='text-2xl font-bold text-center'>Hear From Our Satisfied Customers</p>
      <p className='text-gray-600 sm:max-w-lg text-center mx-auto m-2'>From the unparalleled quality of our vehicles to the personalized touch of our customer service, 
        these stories illuminate the difference that our commitment to excellence makes.</p>

    <div className='flex xl:flex-row flex-col gap-4  text-center justify-evenly mt-8 mx-auto items-center'>
    <div className=' border-black shadow-2xl p-4 w-[400px] h-[250px] relative '>
        <i className='text-lg'>
            The staff's knowledge and passion for cars were evident, making the selection process enjoyable and informative. 
            I drove away in my dream car, and the performance has been remarkable.</i>
        <div className='absolute bottom-4 flex gap-2 items-center'>
        <img src={reviewImage1} className='w-12 h-12 rounded-full '/>
        <p className='font-bold'>Satoru Gojo</p>
        </div>
    </div>

    <div className=' border-black shadow-2xl p-4 w-[400px] h-[250px] relative'>
        <i className='text-lg'>
        Choosing a vehicle for my daily commute and family outings was a big decision, 
        but the team made it an easy choice. </i>

        <div className='absolute bottom-4 flex gap-2 items-center'>
        <img src={reviewImage2} className='w-12 h-12 rounded-full'/>
        <p className='font-bold'>Mash</p>
        </div>
        
    </div>


    </div>
    </div>
    </div>

  )
}

export default Reviews
