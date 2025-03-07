import React, { useState } from 'react'
import uberDriverLogo from '../assets/uberDriverLogo.png';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [captainData,setCaptainData] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();

        setCaptainData({
            email:email,
            password:password
        })
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-20 mb-5' src={uberDriverLogo} alt="Uber Logo" />
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className='text-lg font-medium mb-2'>What's Your Email Address?</h3>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>LogIn</button>
            </form>
            <Link to='/CaptainSignup' className='text-center text-[#10b461]'>New to Uber? Register as a Captain</Link>
        </div>
        <div>
            <Link to={'/UserLogin'} className='bg-[#10b461] flex items-center jsutify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin