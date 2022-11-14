import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Adventure from './components/adventure';
import Nft from './components/Nft';
import Footer from './components/Footer';

export default function homepage() {
  return ( 
    <div id="homepage" >
    <Navbar></Navbar>
    <Body />
    <Adventure />
    <Nft />
    <Footer />
    </div>

  )
}
