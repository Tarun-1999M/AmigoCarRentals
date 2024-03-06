import React from 'react'
import ButtonCard from './ButtonCard'

const DisplayStatsCard = ({stats}) => {
  return (
    <>
    <div className='w-[200px]'>
      <table className='border-collapse border border-gray-400 w-full mb-2'> 
        <thead>
          <tr>
            <th className='border border-gray-300 bg-[#191970] text-white p-2 ' colSpan="100%"> 
              ${stats.Rent} / rent per day
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-gray-300 p-2'>Year</td> 
            <td className='border border-gray-300 p-2'>{stats.Year}</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Seating</td>
            <td className='border border-gray-300 p-2'>{stats.Seating}</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Range</td>
            <td className='border border-gray-300 p-2'>{stats.Range}</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Tank</td>
            <td className='border border-gray-300 p-2'>{stats.Tank}</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>EPA</td>
            <td className='border border-gray-300 p-2'>{stats.EPA}</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Engine</td>
            <td className='border border-gray-300 p-2'>{stats.Engine}</td>
          </tr>
        </tbody>
      </table>
      
    </div>

    <ButtonCard label='Reserve Now' />
    </>
  )
}

export default DisplayStatsCard
