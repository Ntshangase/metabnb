import React from 'react';
import Hhouse from '/home/mntwana/metabnb/src/Assets/Hhouse.png';
import Hmeta from '/home/mntwana/metabnb/src/Assets/Hmetabnb.png';

export default function Navbar() {
  return (
    <div classNanme="navbar"> 
    <img id="house" src={Hhouse} alt="House" ></img>
    <img id="meta"  src={Hmeta} alt="Hmeta" ></img>

    <a id="h1" href="#home">Home</a>
    <a  id='h2' href="#place">Place to Stay</a>
    <a id="h3" href="#nft">NFTs</a>
    <a id="h4" href="#community">Community</a>
    <a id="h5" href="wallet">Connect wallet</a>
</div>
  )
}
