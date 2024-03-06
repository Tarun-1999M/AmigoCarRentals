import React from 'react'
import carsPicture from "../assets/vehicleDisplay/groupCarPicture.png"
import ButtonCard from '../components/ButtonCard'
import icon2 from "../assets/arrowlogo2.jpg"

const ChooseUs = () => {
  return (
    <div className='max-container my-9 font-montserrat p-4' id="about">
        <img src={carsPicture} alt="carsPicture" className='max-w-full sm:w-[600px] h-auto my-10 mx-auto'/>

        <div className='sm:flex sm:flex-row sm:justify-evenly sm:items-start flex flex-col items-center'>

            <div className='flex flex-col gap-4 sm:max-w-lg justify-start my-2 p-4'>
                <p className='mb-0 font-bold'>Why Choose Us</p>
                <p className='font-bold text-2xl mt-0'>Discover the Difference with Our Premier Vehicle Selection</p>
                <p className='text-gray-600'>At the heart of our mission lies a commitment to not just meet, but exceed, your expectations. 
                    Choosing us means opting for a seamless blend of luxury, performance, and unparalleled service. 
                    We don't just offer vehicles; we provide a gateway to a lifestyle where every journey becomes a cherished experience.</p>
                
                <div>
                    <ButtonCard label="Find Details" icon={icon2} />
                </div>
            </div>

        
            

            <div className='flex flex-col gap-4 sm:max-w-sm'>
                <div>
                   <p className='font-bold text-xl my-2'>Competitive Pricing and Flexible Financing Options</p> 
                   <p className='text-gray-600'>Get the luxury you deserve at a price that makes sense. We offer competitive pricing on all our vehicles, 
                    along with flexible financing options to suit your budget. </p>
                </div>

                <div>
                    <p className='font-bold text-xl my-2'>Commitment to Quality and Reliability</p>
                    <p className='text-gray-600'>Every vehicle in our collection undergoes a rigorous inspection and certification process to ensure it meets our high standards for quality and reliability. 
                        Drive with confidence knowing that your vehicle is backed by our seal of approval.</p>
                </div>

                <div>
                    <p className='font-bold text-xl my-2'>Exclusive Member Benefits</p>
                    <p className='text-gray-600'>Join our community and enjoy exclusive benefits, including access to our VIP events, 
                        priority service appointments, and special offers on maintenance and accessories. </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ChooseUs
