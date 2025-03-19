import React from 'react'
import UberCar from '../assets/UberCar.png';
import UberBike from '../assets/UberBike.png';
import UberAuto from '../assets/UberAuto.png';

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setVehiclePanel(false)}} className='absolute top-6 right-6 text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props.setVehiclePanel(false)
            }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full items-center justify-between'>
          <img className='h-16 w-1/4' src={UberCar} alt="UberCar" />
          <div className='w-1/2 ml-3'>
            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4'>₹195.44</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props.setVehiclePanel(false)
            }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full items-center justify-between'>
          <img className='h-16 w-1/4' src={UberBike} alt="UberCar" />
          <div className='w-1/2 ml-3'>
            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='text-sm'>3 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4'>₹65.11</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props.setVehiclePanel(false)
            }} className='flex border-2 active:border-black bg-gray-100 rounded-xl mb-2 p-3 w-full items-center justify-between'>
          <img className='h-16 w-1/4' src={UberAuto} alt="UberCar" />
          <div className='w-1/2 ml-3'>
            <h4 className='font-medium text-lg'>UberAuto<span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-xl font-semibold w-1/4'>₹115.44</h2>
        </div>
    </div>
  )
}

export default VehiclePanel