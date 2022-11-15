import React from 'react';
import Metaheader from '/home/mntwana/metabnb/src/Assets/metaheader.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img id="meta" src={Metaheader} alt="House" ></img>

      <div id='ancors'>
        <a id="h1" href="#home">Home</a>
        <a id='h2' href="#place">Place to Stay</a>
        <a id="h3" href="#nft">NFTs</a>
        <a id="h4" href="#community">Community</a>
      </div>
      <a className="h5 text"  href="wallet">Connect wallet</a>
    </div>
  )
}
