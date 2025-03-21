import React, { useState, useRef} from 'react'
import uberLogo from '../assets/uberLogo.png';
import Homebg from '../assets/UserHomebg.gif';
import { Link } from 'react-router-dom';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const finishRidePanelRef = useRef(null)

    const [finishRidePanel, setFinishRidePanel] = useState(false)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src={uberLogo} alt="" />
          <Link to="/CaptainHome" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-5/6'>
            <img src={Homebg} alt="Home Uber" />
        </div>
        <div className='h-1/6 p-6 flex items-center justify-between relative bg-yellow-400' onClick={()=>{setFinishRidePanel(true)}}>
            <h5 onClick={()=>{}} className='text-center w-[90%] absolute top-0 text-2xl'><i className="ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold'>4 KM away</h4>
            <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>

        <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translaye-y-full px-3 py-8 bg-white'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>

    </div>
  )
}

export default CaptainRiding