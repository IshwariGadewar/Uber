import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Userlogin" element={<UserLogin />} />
        <Route path="/UserSignup" element={<UserSignup />} />
        <Route path="/CaptainLogin" element={<CaptainLogin />} />
        <Route path="/CaptainSignup" element={<CaptainSignup />} />
        <Route path="/home" element={ <UserProtectWrapper> <Home /> </UserProtectWrapper> } />
        <Route path='/user/logout' element={<UserProtectWrapper> <UserLogout/> </UserProtectWrapper>} />
        <Route path='/CaptainHome' element={  <CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper> } />
        <Route path='/captain/logout' element={<CaptainProtectWrapper> <CaptainLogout/> </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App