import React from 'react';
import mansion1 from '/home/mntwana/metabnb/src/Assets/mansion1.png';
import wintercastle1 from '/home/mntwana/metabnb/src/Assets/wintercastle1.png';
import playground1 from '/home/mntwana/metabnb/src/Assets/playgound1.png';
import castle1 from '/home/mntwana/metabnb/src/Assets/castle1.png';
import frame1 from '/home/mntwana/metabnb/src/Assets/Frame 1.png';

export default function Body() {
    return (
        <div>
            <p>
                <div className="row">
                    <div className="column">
                        <img src={mansion1} alt='mansion1' />
                        <img src={playground1} alt='winercastle1' />
                    </div>
                    <div classNaame="column">
                        <img src={wintercastle1} alt='playground' />
                        <img src={castle1} alt="castle1" />

                    </div>
                </div>
                <dl id='para1'>
                    <dt>Rent a <strong className='hstrong' >Place</strong> away from</dt>
                    <dt> <strong className='hstrong' >Home</strong> in the <strong className='hstrong' >Metaverse</strong></dt>
                </dl>
            </p>
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
