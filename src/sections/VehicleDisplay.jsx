import React from 'react'
import { vehicleDataForDisplay } from '../constants'
import DisplayStatsCard from '../components/DisplayStatsCard'

const VehicleDisplay = () => {
  const [image,setImage] = React.useState(vehicleDataForDisplay[0].src)
  const [stats, setStats] = React.useState(vehicleDataForDisplay[0].stats)
  const [tracker, setTracker] = React.useState(vehicleDataForDisplay[0].name)

  function handleClick(vehicle){
    setImage(vehicle.src)
    setStats(vehicle.stats)
    setTracker(vehicle.name)
  }
  return (
    <div className='bg-gray-200 p-9 mt-9'>
    <div className='max-container mt-20 ' id="models">

      <div className='flex flex-col justify-center items-center  mb-9 font-montserrat'>
         <h1 className='text-3xl font-bold mb-[10px]'>Vehicle Collection</h1>
         <p className=' text-gray-600'>Dive into our exclusive range of premium vehicles tailored to meet your every need.</p>
      </div>
      
      <div className='flex sm:flex-row flex-col gap-4 xl:justify-evenly sm:items-start items-center justify-center'>

      <div className='flex gap-4  font-montserrat flex-col w-[fit-content] cursor-pointer'
              >
          {vehicleDataForDisplay.map((vehicle)=>(
         
            <p key={vehicle.name} className={` border-blue-800 ${tracker===vehicle.name? 'bg-[#191970] text-white w-[200px]' : ""} border-2 p-1`} onClick={()=>{handleClick(vehicle)}}>{vehicle.name}</p>
          
        ))}
         </div>

         <div className='max-w-full sm:w-[600px] h-auto'>
              <img src={image} />
            </div>

          <div>
              <DisplayStatsCard  stats={stats}/>
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default VehicleDisplay
