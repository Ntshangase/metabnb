import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Adventure from './components/adventure';
import Nft from './components/Nft';

export default function homepage() {
  return ( 
    <div>
    <Navbar></Navbar>
    <Body />
    <Adventure />
    <Nft />
    </div>

  )
}
