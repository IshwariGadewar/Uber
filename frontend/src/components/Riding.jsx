import React from 'react'
import Homebg from '../assets/UserHomebg.gif';
import UberCar from '../assets/UberCar.png';
import Driver from '../assets/Driver.webp';
import { Link } from 'react-router-dom';

const Riding = () => {

    const data = [
        {
          icon: "ri-map-pin-range-fill",
          heading: "562/11-A",
          description: "kaikondrahalli, Bengaluru, Karnataka"
        },
        {
          icon: "ri-wallet-2-fill",
          heading: "₹193.20",
          description: "Cash Cash"
        }
      ];

  return (
    <div className='h-screen'>
        <Link to="/home" className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2'>
            <i className="text-xl font-medium ri-home-3-line"></i>
        </Link>
        <div className='h-1/2 '>
            <img src={Homebg} alt="Home Uber" />
        </div>
        <div className='h-1/2'>
            <div className='flex items-center justify-between px-5 mb-2'>
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
            <div className='w-full px-5 '>
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

            <button className='w-1/2 bg-green-600 text-white font-semibold p-2 mt-5 ml-5 rounded-lg'>Make a Payment</button>


        </div>
    </div>
  )
}

export default Riding