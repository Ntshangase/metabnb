import React from 'react';
import Navbar from './Navbar';
import first4 from '/home/mntwana/metabnb/src/Assets/first4.png';

export default function Body() {
    return (
        <div id="bodypage">
            <Navbar></Navbar>
            <div className="col">
                <dl className='para1'>
                    <div className="firstCol">
                        <dt className="rent">Rent a <span>Place</span> away from  
                         <span> Home</span> in the <span>Metaverse</span></dt>
                        <p>we provide you access to luxury and affordable houses
                            in the metaverse get a chance to turn your imagination
                            to reality at your comfort zone</p>
                    </div>

                    <form className="example" action="action_page.php">
                        <input id="Sbox" type="text" placeholder="Search.." name="search" />
                        <button id="Sbutton" type="submit"><i className="fa fa-search"></i>Search</button>
                    </form>
                </dl>
                <dl id='para2'>
                    <img id='first4' src={first4} alt='first4' />
                </dl>
            </div>
        </div>
    )
}
