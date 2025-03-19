import React from 'react'
import UberCar from '../assets/UberCar.png';
import UberBike from '../assets/UberBike.png';
import UberAuto from '../assets/UberAuto.png';

const ConfirmedRide = (props) => {

  const data = [
    {
      icon: "ri-map-pin-range-fill",
      heading: "562/11-A",
      description: "kaikondrahalli, Bengaluru, Karnataka"
    },
    {
      icon: "ri-square-fill",
      heading: "Third Wave Coffee",
      description: "17th Cross Rd, PWD Quaters, 1st Sector, HRS Layout, Bengaluru, Karnataka"
    },
    {
      icon: "ri-wallet-2-fill",
      heading: "₹193.20",
      description: "Cash Cash"
    }
  ];

  return (
    <div>
        <h5 onClick={()=>{props.setConfirmedRidePanel(false)}} className='absolute top-3 right-6 text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        
        <div className='flex flex-col justify-between items-center gap-2'>
          <img className='h-20' src={UberCar} alt="" />
          <div className='w-full p-5'>
            <hr className="my-2 mb-5 border-t-2 border-gray-300" />
            {data.map((elem, idx) => (
              <div key={idx} className='flex gap-4 mb-4'>
                <div className='text-xl flex items-center justify-center'>
                  <i className={elem.icon}></i>
                </div>
                <div>
                  <h4 className='font-semibold text-xl'>{elem.heading}</h4>
                  <p className='text-sm'>{elem.description}</p>
                </div>
              </div>
            ))}

          </div>
          <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmedRidePanel(false)
            }} className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm Ride</button>
        </div>
    </div>
  )
}

export default ConfirmedRide