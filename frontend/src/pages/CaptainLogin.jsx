/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import uberDriverLogo from '../assets/uberDriverLogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) =>{
        e.preventDefault();

        const captain = {
            email:email,
            password:password
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
            if (response.status === 200 || response.status === 201) {  // Accept both 200 & 201
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/CaptainHome');  // Ensure this executes
            } else {
                console.log('Unexpected Response:', response);
            }
        } catch (error) {
            console.error('Backend Error:', error.response?.data || error.message);
        }
        
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