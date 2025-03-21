import React, { useState, useRef} from 'react'
import uberLogo from '../assets/uberLogo.png';
import Homebg from '../assets/UserHomebg.gif';
import { Link } from 'react-router-dom';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ReachedToUser } from '../components/ReachedToUser';

const CaptainRidingToUser = () => {

    const reachedToUserRef = useRef(null)

    const [reachedToUser, setReachedToUser] = useState(false)

    useGSAP(function(){
        if(reachedToUser){
          gsap.to(reachedToUserRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(reachedToUserRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[reachedToUser])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src={uberLogo} alt="" />
        </div>
        <div className='h-5/6'>
            <img src={Homebg} alt="Home Uber" />
        </div>
        <div className='h-1/6 p-6 flex items-center justify-between relative bg-yellow-400' onClick={()=>{setReachedToUser(true)}}>
            <h5 onClick={()=>{}} className='text-center w-[90%] absolute top-0 text-2xl'><i className="ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl text-center w-full font-semibold'>4 KM away</h4>
        </div>

        <div ref={reachedToUserRef} className='fixed w-full z-10 bottom-0 translaye-y-full px-3 py-8 bg-white'>
          <ReachedToUser setReachedToUser={setReachedToUser}/>
        </div>

    </div>
  )
}

export default CaptainRidingToUser