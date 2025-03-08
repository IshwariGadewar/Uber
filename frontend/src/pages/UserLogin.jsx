/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import uberLogo from '../assets/uberLogo.png';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [userData,setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) =>{
        e.preventDefault();

        const userData = {
            email:email,
            password: password
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
            
            // console.log('Response:', response); // Log response
        
            if (response.status === 200 || response.status === 201) {  // Accept both 200 & 201
                const data = response.data;
                // console.log('User Data:', data.user); // Log user data
                setUser(data.user);
                localStorage.setItem('token', data.token);
                // console.log('Navigating to home...');
                navigate('/home');  // Ensure this executes
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
            <img className='w-20 mb-5' src={uberLogo} alt="Uber Logo" />
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className='text-lg font-medium mb-2'>What's Your Email Address?</h3>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password'/>
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>LogIn</button>
            </form>
            <Link to='/UserSignup' className='text-center text-[#10b461]'>New to Uber? Create an account</Link>
        </div>
        <div>
            <Link to={'/CaptainLogin'} className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin