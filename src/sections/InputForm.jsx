import React from 'react'
import ButtonCard from '../components/ButtonCard';

const InputForm = () => {
  const [formData,setFormData] = React.useState({
    carType:"",
    pickUp:"",
    dropOf:"",
    pickUpDate:"",
    dropOfDate:""

  })

  function handleChange(event){
    const {name,value}=event.target;
    setFormData((prevValue)=>(
       {...prevValue,[name]:value}
    ))
  }

  return (
    
    <div className='w-fit mx-auto my-9 p-9 shadow-2xl max-container ' id="our team">
      <p className='font-bold text-2xl my-4'>Book a Car</p>
          <form>
           <div className='xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-10 grid grid-cols-1 gap-4'>
              
              <div>
                <label style={{display:'block'}}> Select Your Car Type</label>
                    <select name="carType" value={formData.carType} onChange={handleChange} className=' form-select border-2 border-black  bg-white'>
                        <option value="">select your car type</option>
                        <option value="Economy">Economy</option>
                        <option value="Compact">Compact</option>
                        <option value="Mid-size">Mid-size</option>
                        <option value="Full-size">Full-size</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Convertible">Convertible</option>
                        <option value="Van/Minivan">Van/Minivan</option>
                        <option value="Pickup Truck">Pickup Truck</option>
                        <option value="Hybrid/Electric">Hybrid/Electric</option>
                        <option value="Sports Car">Sports Car</option>
                        <option value="Station Wagon">Station Wagon</option>
                      </select>
              </div>

              <div>
                <label style={{display:'block'}}>Pick-up</label>
                  <div>
                     <select name="pickUp" value="formData.pickUp" onChange={handleChange} className=' form-select border-2 border-black bg-white'>
                        <option>select pickup location</option>
                        <option>Miami International Airport(MIA)</option>
                        <option>Downtown Miami</option>
                        <option>Miami Beach</option>
                        <option>Brickell</option>
                        <option>Wynwood</option>
                     </select>
                  </div>
              </div>

              <div>
                <label style={{display:'block'}}>Drop-of</label>
                  <div>
                     <select name="dropOf" value="formData.dropOf" onChange={handleChange} className=' form-select border-2 border-black bg-white'>
                        <option>select dropof location</option>
                        <option>Miami International Airport(MIA)</option>
                        <option>Downtown Miami</option>
                        <option>Coconut Grove</option>
                        <option>Adventura</option>
                        <option>Dadeland</option>
                     </select>
                  </div>
              </div>

              <div>
                <label>
                  Pick-up
                  <div>
                     <input type="date" name="pickUpDate" value={formData.pickUpDate} 
                     onChange={handleChange} className=' form-input border-2 border-black'
                     placeholder='mm-dd-yyyy'/>
                  </div>
                </label>
              </div>

              <div>
                <label>
                  Drop-of
                  <div>
                     <input type="date" name="dropOfDate" value={formData.dropOfDate} 
                     onChange={handleChange} className=' form-input border-2 border-black'
                     placeholder='mm-dd-yyyy'/>
                  </div>
                </label>
              </div>

             <ButtonCard label="search" /> 
           </div>
           
           </form>
          
    </div>

  
  )
}

export default InputForm
