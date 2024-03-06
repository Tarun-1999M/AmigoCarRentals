import React from 'react'
import { QAndA } from '../constants'
import arrowDown from "../assets/arrowDown.png"
import arrowDownWhite from "../assets/arrowDownWhite.webp"
import FAQImage from "../assets/FAQImage.webp"


const FAQ = () => {
  const [showAnswer,setShowAnswer] = React.useState(false)
  const [questionNumber,setQuestionNumber] = React.useState(1)
  function handleClick(question){
    setShowAnswer((prevValue)=>!prevValue)
    setQuestionNumber(question.id)
  }

  return (

    <div className='my-9 p-8 max-container'>

    <div className='flex flex-col gap-1 my-5 items-center'>
      <p>FAQ</p>
      <p className='text-4xl font-bold'>Frequently Asked Questions</p>
    </div>

   

   <div className='flex items-center xl:flex-row flex-col'>

    <div><img src={FAQImage} /></div>

    <div className=' border-2 border-slate-500 shadow-2xl mx-auto  h-[fit-content] w-full xl:w-[900px]'>
   
     { QAndA.map((question)=>(
        <div className='flex flex-col gap-2  cursor-pointer' onClick={()=>{handleClick(question)}}>
          <div className={`${showAnswer && question.id===questionNumber? "bg-[#191970] text-white" : ""} p-4`}>
          <p className='flex justify-between'>{question.id}. {question.question}<span><img src={showAnswer && question.id===questionNumber? arrowDownWhite : arrowDown} className='w-4 h-4'/></span></p>
          </div>
          {showAnswer && question.id===questionNumber && <p className='p-4 bg-white text-gray-600'>{question.answer}</p>}
        </div>
      ))}
    </div>
    </div> 
    </div>
    
  )
}

export default FAQ
