import React from 'react';
import slantframe from '/home/mntwana/metabnb/src/Assets/slantframe.png';
import learn from '/home/mntwana/metabnb/src/Assets/learn.png';

export default function Nft() {
    return (
        <div id='Backnft'>
            <h2 id='slog2'>Metabnb NFTs</h2>
            <img id="slant" src={slantframe} alt='slantframe' />
            <p>
                <dl id='para3'>
                    <dt>Discover our NFT gift cards collection. Loyal</dt>
                    <dt>customers gets amazing gift cards which are</dt>
                    <dt>traded as NFTs. These NFTs gives our cutomer</dt>
                    <dt>access to loads of our exclusive services.</dt>
                </dl>
                <img id="lenButton" src={learn} alt='learnButton' />
            </p>


        </div>
    )
}
