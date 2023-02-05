import React from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Bookings from '../pages/Bookings'

import Dashboard from '../pages/Dashboard'
import SellCar from '../pages/SellCar'
import Settings from '../pages/Settings'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/sell-car' element={<SellCar/>}/>
        <Route path='/settings' element={<Settings/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router