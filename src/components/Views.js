import React from 'react';
import place1 from '/home/mntwana/metabnb/src/Assets/place1.png';
import place2 from '/home/mntwana/metabnb/src/Assets/place2.png';
import place3 from '/home/mntwana/metabnb/src/Assets/place3.png';
import place4 from '/home/mntwana/metabnb/src/Assets/place4.png';
import place5 from '/home/mntwana/metabnb/src/Assets/place5.png';
import place6 from '/home/mntwana/metabnb/src/Assets/place6.png';
import place7 from '/home/mntwana/metabnb/src/Assets/place7.png';
import place8 from '/home/mntwana/metabnb/src/Assets/place8.png';
import place9 from '/home/mntwana/metabnb/src/Assets/place9.png';
import place10 from '/home/mntwana/metabnb/src/Assets/place10.png';
import place11 from '/home/mntwana/metabnb/src/Assets/place11.png';
import place12 from '/home/mntwana/metabnb/src/Assets/place12.png';
import place13 from '/home/mntwana/metabnb/src/Assets/place13.png';
import place14 from '/home/mntwana/metabnb/src/Assets/place14.png';
import place15 from '/home/mntwana/metabnb/src/Assets/place15.png';
import place16 from '/home/mntwana/metabnb/src/Assets/place16.png';

export default function View() {
    return (
        <div id="view">
            <div>
                <div id="colum1">
                    <img className="Fit" src={place1} alt='place1' />
                    <img className="Fit" src={place2} alt='place2' />
                    <img className="Fit" src={place3} alt='place3' />
                    <img className="Fit" src={place4} alt='place4' />
                </div>
                <div id="colum2" >
                    <img className="Fit" src={place5} alt='place5' />
                    <img className="Fit" src={place6} alt="place6" />
                    <img className="Fit" src={place7} alt='place7' />
                    <img className="Fit" src={place8} alt='place8' />

                </div>
                <div id="colum3">
                    <img className="Fit" src={place9} alt='place9' />
                    <img className="Fit" src={place10} alt='place10' />
                    <img className="Fit" src={place11} alt='place11' />
                    <img className="Fit" src={place12} alt='place12' />
                </div>
                <div id="colum4" >
                    <img className="Fit" src={place13} alt='place13' />
                    <img className="Fit" src={place14} alt="place14" />
                    <img className="Fit" src={place15} alt='place15' />
                    <img className="Fit" src={place16} alt='place16' />

                </div>
            </div>
        </div>

    )
}
