import React, { useState } from 'react'
import uberLogo from '../assets/uberDriverLogo.png';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [captainData,setCaptainData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault();

        setCaptainData({
            fullname:{
                firstname:firstname,
                lastname:lastname,
            },
            email:email,
            password:password
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-20 mb-5' src={uberLogo} alt="Uber Logo" />
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className='text-lg w-full font-base mb-2'>What's Your Name?</h3>
                <div className='flex gap-4 mb-5'>
                    <input required value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm' type="text" placeholder='Firstname'/>
                    <input required value={lastname} onChange={(e)=>{setLastName(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm' type="text" placeholder='Lastname'/>
                </div>
                <h3 className='text-lg font-base mb-2'>What's Your Email Address?</h3>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="email" placeholder='email@example.com'/>
                <h3 className='text-lg font-base mb-2'>Enter Password</h3>
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="password" placeholder='password'/>
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>SignUp</button>
            </form>
            <Link to='/CaptainLogin' className='text-center text-[#10b461]'>Already have a account? Login here</Link>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>The site is protected bt reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service to apply</span>.</p>
        </div>
    </div>
  )
}

export default CaptainSignup