import React from 'react'
import ButtonCard from '../components/ButtonCard'

const Footer = () => {
  const [email,setEmail] = React.useState("")

  function handleChange(event){
    setEmail((prevValue)=>event.target.value)
  }
  return (
   
   <div className='bg-slate-800' id="contact">
   <div className='max-container text-white p-9 flex flex-col justify-between items-start cursor-pointer sm:flex-row sm:items-center gap-6'>
     
      <div className='flex flex-col gap-2'>
        <p><span className='font-bold'>CAR</span> Rental</p>
        <p className='sm:max-w-sm'>We have perfect cars and great deals to meet all your needs</p>
        <p><i class="fa-solid fa-phone text-white"></i> (123)-456-7890</p>
        <p><i class="fa-solid fa-envelope text-white"></i> amigorentals@rentals.com</p>
        
      </div>
      
      <div className='flex flex-col gap-2'>
        <p>Company</p>
        <p>Miami</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      

        <div className='flex flex-col gap-2'>
            <p>WORKING HOURS</p>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 05:00PM</p>
            <p>Sun: Closed</p>
        </div>

        <div className='flex flex-col gap-2'>
            <p>SUBSCRIPTION</p>
            <p className='sm:max-w-sm'>Subscribe your email address for latest news and updates</p>
            <form>
             <input type="email" placeholder='enter email address' value={email} onChange={handleChange} className='p-2 text-black form-input'/>
             <ButtonCard label="Subscribe"className="w-full" />
            </form>
        </div>
    </div>
    </div>
   
  )
}

export default Footer
