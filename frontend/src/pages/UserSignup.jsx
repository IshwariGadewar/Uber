import React, { useState, useContext} from 'react'
import uberLogo from '../assets/uberLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')

    // eslint-disable-next-line no-unused-vars
    const [ userData, setUserData ] = useState({})


    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) =>{
        e.preventDefault();

        const newUser = {
            fullname:{
                firstname:firstname,
                lastname:lastname,
            },
            email:email,
            password:password
        }
        // console.log(newUser);
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
            
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
                <h3 className='text-lg font-base mb-2'>What's Your Name?</h3>
                <div className='flex gap-4 mb-5'>
                    <input required value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm' type="text" placeholder='Firstname'/>
                    <input required value={lastname} onChange={(e)=>{setLastName(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm' type="text" placeholder='Lastname'/>
                </div>
                <h3 className='text-lg font-base mb-2'>What's Your Email Address?</h3>
                <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="email" placeholder='email@example.com'/>
                <h3 className='text-lg font-base mb-2'>Enter Password</h3>
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="password" placeholder='password'/>
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Create Account</button>
            </form>
            <Link to='/UserLogin' className='text-center text-[#10b461]'>Already have a account? Login here</Link>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint officiis optio ea eius accusamus numquam voluptate, cum dolore dolorem voluptas ipsa, consectetur saepe veritatis, omnis assumenda incidunt ratione voluptatum!</p>
        </div>
    </div>
  )
}

export default UserSignup