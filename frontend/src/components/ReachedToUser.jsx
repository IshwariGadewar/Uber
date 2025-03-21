import React, {useState} from 'react'
import Passenger from '../assets/UberPassenger.jpeg';
import { Link } from 'react-router-dom';

export const ReachedToUser = (props) => {

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
              icon: "ri-sticky-note-fill",
              heading: "",
              description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aut voluptatibus voluptas, quibusdam aspernatur tempora repellendus"
            }
          ];
    
          const [otp, setOTP] = useState('')
    
          const submitHandler = (e) =>{
            e.preventDefault();
          } 

  return (
    <div>
        <h5 onClick={()=>{props.setReachedToUser(false)}} className='absolute top-3 right-6 text-3xl'><i className="ri-arrow-down-wide-line"></i></h5>
        {/* <h3 className='text-2xl font-semibold mb-5'>New Offer Available</h3> */}
        
        <div className='flex items-center justify-between mx-4 rounded-lg bg-yellow-200 p-2 px-4 mt-3'>
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
                <hr className="mb-5 border-t-2 border-gray-300 mt-6" />
            </div>

            <div className="flex justify-center gap-4 p-4 -mt-3 bg-gray-100">
                <button className="flex flex-col items-center justify-center bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600">
                    <i className="ri-phone-fill text-lg"></i>
                    <span className="text-sm font-medium">Call</span>
                </button>

                <button className="flex flex-col items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700">
                    <i className="ri-message-3-fill text-lg"></i>
                    <span className="text-sm font-medium">Message</span>
                </button>

                <Link to='/CaptainHome' onClick={()=>{
                    props.setReachedToUser(false)
                }} className="flex flex-col items-center justify-center bg-gray-400 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-500">
                    <i className="ri-delete-bin-6-fill text-lg"></i>
                    <span className="text-sm font-medium">Cancel</span>
                </Link>
            </div>
            
            <div>
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <input value={otp} onChange={(e)=>{setOTP(e.target.value)}} className='bg-[#eee] px-8 py-2 text-lg font-mono rounded-lg w-full mt-5' type="number" placeholder='Enter Users OTP'/>
                    <Link to='/CaptainRiding' className='w-full bg-yellow-400 flex justify-center text-white font-semibold p-2 rounded-lg mt-2'>Start Ride</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
