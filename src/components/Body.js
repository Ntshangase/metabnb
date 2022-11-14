import React from 'react';
import frame1 from '/home/mntwana/metabnb/src/Assets/Frame 1.png';
import Navbar from './Navbar';
import first4 from '/home/mntwana/metabnb/src/Assets/first4.png';

export default function Body() {
    return (
        <div id="bodypage">
            <Navbar></Navbar>
            <p>
                
                <dl id='para1'>
                    <dt>Rent a <strong className='hstrong' >Place</strong> away from</dt>
                    <dt> <strong className='hstrong' >Home</strong> in the <strong className='hstrong' >Metaverse</strong></dt>
                </dl>
            </p>
            <img id='first4' src={first4} alt='first4' />
            <p>
                <dl id='para2'>
                    <dt>we provide you access to luxury and affordable houses</dt>
                    <dt>in the metaverse get a chance to turn your imagination</dt>
                    <dt>to reality at your comfort zone</dt>
                </dl>
            </p>
            <p>
                <form class="example" action="action_page.php">
                    <input id="Sbox" type="text" placeholder="Search.." name="search" />
                    <button id="Sbutton" type="submit"><i class="fa fa-search"></i>Search</button>
                </form>
            </p>
            <p>
                <img id="frame1" src={frame1} alt='frame1' />
            </p>
        </div>
    )
}
