import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Adventure from './components/adventure';

export default function homepage() {
  return ( 
    <div>
    <Navbar></Navbar>
    <Body />
    <Adventure />
    </div>

  )
}
