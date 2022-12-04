import React, { useEffect, useState } from 'react';
import SideMenu from '../components/SideMenu'
import {
  Route,
  Routes as Switch
} from 'react-router-dom';

import Bill from '../components/Bill/index.jsx'
import { Drink, Food, History, Home, Promo, Setting, Wallet } from '../Pages/index.jsx'

const Routes = () => {
  return (
    <div className="flex w-screen h-screen">
      <SideMenu/>
      <Switch>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/food" element={<Food/>}/>
        <Route exact path="/drink" element={<Drink/>}/>
        <Route exact path="/history" element={<History/>}/>
        <Route exact path="/wallet" element={<Wallet/>}/>
        <Route exact path="/promo" element={<Promo/>}/>
        <Route exact path="/setting" element={<Setting/>}/>
      </Switch>
      <Bill/>
    </div>
  )
}

export default Routes
