/* eslint-disable no-unused-vars */
import React,{useState , useRef} from 'react'
import uberLogo from '../assets/uberLogo.png';
import Homebg from '../assets/UserHomebg.gif';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

const Home = () => {
  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panelOpen,setPanelOpen] = useState(false)
  const PanelRef = useRef(null)
  const PanelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const VehiclePanelRef = useRef(null)
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false)
  const ConfirmedRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const VehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(PanelRef.current,{
        height:'70%',
        padding:24
        // opacity:1
      })
      gsap.to(PanelCloseRef.current,{
        opacity:1
      })
    }
    else{
      gsap.to(PanelRef.current,{
        height:'0%',
        padding:0
        // opacity:0
      })
      gsap.to(PanelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(VehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(VehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmedRidePanel){
      gsap.to(ConfirmedRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ConfirmedRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmedRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(VehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(WaitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 left-5 top-5 absolute' src={uberLogo} alt="Uber Logo" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={Homebg} alt="User Background" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={PanelCloseRef} onClick={()=>{setPanelOpen(false)}} className='opacity-0 absolute top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input onClick={()=>{setPanelOpen(true)}} value={pickup} onChange={(e)=>{setPickup(e.target.value)}} className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
            <input onClick={()=>{setPanelOpen(true)}} value={destination} onChange={(e)=>{setDestination(e.target.value)}} className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination'/>
          </form>
        </div>
        <div ref={PanelRef} className='h-0 bg-white'>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={VehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 bg-white'>
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={ConfirmedRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white'>
        <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmedRidePanel={setConfirmedRidePanel}/>
      </div>

      <div ref={VehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0  px-3 py-6 bg-white'>
        <WaitForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home