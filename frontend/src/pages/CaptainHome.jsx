/* eslint-disable no-unused-vars */
import React,{ useState,useRef } from 'react'
import Homebg from '../assets/UserHomebg.gif';
import UberCar from '../assets/UberCar.png';
import uberLogo from '../assets/uberLogo.png';
import { Link } from 'react-router-dom';
import CaptainDetail from '../components/CaptainDetail';
import RidePopUp from '../components/RidePopUp';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])

return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src={uberLogo} alt="" />
          <Link to="/CaptainLogin" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-xl font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className='h-3/5'>
            <img src={Homebg} alt="Home Uber" />
        </div>

        <div className='h-2/5 p-4'>
          <CaptainDetail />   
        </div>

        <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translaye-y-full px-3 py-8 bg-white'>
          <RidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
        </div>

        <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 bottom-0 translaye-y-full px-3 py-8 bg-white'>
          <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome