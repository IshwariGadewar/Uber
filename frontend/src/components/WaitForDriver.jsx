import React, {useState} from 'react'
import UberCar from '../assets/UberCar.png';
import UberBike from '../assets/UberBike.png';
import UberAuto from '../assets/UberAuto.png';
import Driver from '../assets/Driver.webp';

const WaitForDriver = (props) => {

    const [message, setMessage] = useState("");

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
        <h5 onClick={()=>{props.setWaitingForDriver(false)}} className='absolute top-3 right-6 text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <div className="w-screen relative px-4 pb-4 flex justify-between items-center">
            <p className="text-lg font-semibold">Meet at the pickup point</p>
            <div className="bg-black text-white px-4 py-2 mr-3 text-center">
                <p className="text-xl font-bold">2</p>
                <p className="text-sm">min</p>
            </div>
        </div>
        <hr className="border-t-2 border-gray-300" />
        
        <div className='flex items-center justify-between'>
            <div className="relative w-48 h-24 flex items-center">
                <img className="w-full h-24 object-contain" src={UberCar} alt="UberCar" />
                <img className="absolute left-0 w-16 h-16 rounded-full border-2 border-white shadow-lg" src={Driver} alt="Driver" />
            </div>
            <div className='text-right leading-none'>
                <h2 className='text-lg font-medium -mb-2'>XYZ</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH26 AB 4530</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                <p><i className="ri-shining-fill"></i>5</p>
            </div>
        </div>

        <div className="p-4 bg-white flex flex-col space-y-4">
            <div className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm mt-1 w-64">
                <input type="text" placeholder="Send a message..." value={message} onChange={(e) => setMessage(e.target.value)} className="bg-transparent outline-none text-sm flex-grow"/>
                <button onClick={()=>{setMessage("")}} className="ml-2 text-lg text-gray-600">➤</button>
            </div>
        </div>

        <div className="flex justify-center space-x-12 mt-2">
            {/* Safety */}
            <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <i className="ri-shield-check-line text-blue-500 text-2xl"></i>
            </div>
            <p className="text-sm text-gray-700 mt-1">Safety</p>
            </div>

            {/* Share my trip */}
            <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <i className="ri-broadcast-line text-blue-500 text-2xl"></i>
            </div>
            <p className="text-sm text-gray-700 mt-1">Share my trip</p>
            </div>

            {/* Call driver */}
            <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <i className="ri-phone-line text-blue-500 text-2xl"></i>
            </div>
            <p className="text-sm text-gray-700 mt-1">Call driver</p>
            </div>
        </div>

        <hr className="border-t-2 border-gray-300 mt-6" />

        <div className='w-full px-5 pt-5'>
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
        
    </div>
  )
}

export default WaitForDriver