import React from 'react';
import place1 from '/home/mntwana/metabnb/src/Assets/place1.png';
import place2 from '/home/mntwana/metabnb/src/Assets/place2.png';
import place3 from '/home/mntwana/metabnb/src/Assets/place3.png';
import place4 from '/home/mntwana/metabnb/src/Assets/place4.png';
import place5 from '/home/mntwana/metabnb/src/Assets/place5.png';
import place6 from '/home/mntwana/metabnb/src/Assets/place6.png';
import place7 from '/home/mntwana/metabnb/src/Assets/place7.png';
import place8 from '/home/mntwana/metabnb/src/Assets/place8.png';

export default function adventure() {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img src={place1} alt='place1' />
                    <img src={place2} alt='place2' />
                    <img src={place3} alt='place3' />
                    <img src={place4} alt='place4' />
                </div>
                <div classNaame="column">
                    <img src={place5} alt='place5' />
                    <img src={place6} alt="place6" />
                    <img src={place7} alt='place7' />
                    <img src={place8} alt='place8' />

                </div>
            </div>
        </div>

    )
}
