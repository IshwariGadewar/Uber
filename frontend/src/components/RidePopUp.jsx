import React from 'react'
import Passenger from '../assets/UberPassenger.jpeg';

const RidePopUp = (props) => {

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
        <h5 onClick={()=>{props.setRidePopUpPanel(false)}} className='absolute top-3 right-6 text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>New Offer Available</h3>
        
        <div className='flex items-center justify-between mx-4 rounded-lg bg-yellow-200 p-2 px-4'>
            <div className='flex items-center justify-start gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src={Passenger} alt="Uber Driver" />
                <div>
                    <h2 className='text-lg -font-meduim'>Maitri More</h2>
                    <p className='text-sm text-gray-600'>12km</p>
                </div>
            </div>
            <div>
                <h4 className='text-xl font-semibold'>₹200</h4>
            </div>
        </div>

        <div className='-my-2 flex flex-col justify-between items-center gap-2'>
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
                props.setRidePopUpPanel(false)
                props.setConfirmRidePopUpPanel(true)
            }} className='w-full bg-yellow-400 text-white font-semibold p-2 rounded-lg'>Accept</button>

            <button onClick={()=>{
                props.setRidePopUpPanel(false)
            }} className='w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>
        </div>
    </div>
  )
}

export default RidePopUp