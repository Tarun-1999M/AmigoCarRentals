import React from 'react'
import ButtonCard from '../components/ButtonCard'
import {carImages} from "../constants"
import icon from "../assets/arrow.png"
import icon2 from "../assets/arrowlogo2.jpg"
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"



const Hero = () => {

  const [showCar,setShowCar] = React.useState(0)

  function handleLeftClick(){
    setShowCar((prevValue)=>prevValue==0? carImages.length-1 : prevValue-1)
  }

  function handleRightClick(){
    setShowCar((prevValue)=>prevValue===carImages.length-1 ? 0 : prevValue+1)
  }
  return (
    <>
    <div className='bg-gray-200 p-9'>
    <div className=' flex gap-10 sm:flex-row flex-col min-h-screen justify-center w-full max-container pt-[100px] xl:pt-[80px]' id="home">
      
      <div className='relative sm:2/5 flex flex-col justify-center items-start w-full max-xl:pt-10 sm:px-16 px=8 font-montserrat z-10'>

        <p className='text-sm sm:text-xl font-montserrat text-[#191970] font-bold'>Your journey begins here</p>
        <h1 className=' text-xl sm:text-6xl'>Experience the <span className='text-[#191970] text-bold'>Freedom </span> 
        of the Road</h1>
        <p className='font-montserrat text-gray-600 text-sm sm:text-lg leading-8 mt-6 mb-4 sm:max-w-sm'>Exclusive Deals and Unbeatable Prices at Amigo Car Rentals</p>
        <div className='flex items-center gap-4'>
        <ButtonCard label="Book Ride" icon={icon} />
        <ButtonCard label="Learn More" icon={icon2} id="learnMore"/>
        </div>
      </div>


      
     

      <div className='flex items-center space-between gap-4 z-10'>
        <img src={arrowLeft} className='w-10 h-10 cursor-pointer' onClick={handleLeftClick}/>
        {console.log(carImages[showCar].path)}
        <div className='flex flex-1'>
        <img src={carImages[showCar].path} alt="car image" width="3000px" height="400px" className='w-full sm:max-w-md md:max-w-xl lg:max-w-2xl h-auto object-contain '/>
        </div>
        <img src={arrowRight} className='w-10 h-10 cursor-pointer' onClick={handleRightClick}/>
        </div>

       

      
      
    </div>
    </div>
    </>
  )
}

export default Hero
