/* eslint-disable no-unused-vars */
import React, { useState , useContext } from 'react'
import uberLogo from '../assets/uberDriverLogo.png';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) =>{
        e.preventDefault();

        const captainData = {
            fullname:{
                firstname:firstname,
                lastname:lastname,
            },  
            email:email,
            password:password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType
            }
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
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
        
        
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
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
                <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="password" placeholder='Password'/>
                
                <h3 className='text-lg font-base mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-7'>
                    <input required value={vehicleColor} onChange={(e) => {setVehicleColor(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' type="text" placeholder='Vehicle Color'/>
                    <input required value={vehiclePlate} onChange={(e) => {setVehiclePlate(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' type="text" placeholder='Vehicle Plate'/>
                </div>
                <div className='flex gap-4 mb-7'>
                    <input required value={vehicleCapacity} onChange={(e) => {setVehicleCapacity(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' type="number" placeholder='Vehicle Capacity'/>
                    <select required value={vehicleType} onChange={(e) => {setVehicleType(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm'>
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                    </select>
                </div>
                
                <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'>Create Captain Account</button>
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