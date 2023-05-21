//@ts-nocheck
import React from 'react';

type Props = {};

const ProgressBar = (props: Props) => {
    return (
        <div className='gird grid-cols-2 justify-stretch space-x-5 space-y-5 scrollbar-thin'>
          
            <div className='radial-progress text-accent-focus' style={{ '--value': 80 }}>
                80%
            </div>
            
            <div className='radial-progress text-accent-focus' style={{ '--value': 100 }}>
                100%
            </div>
        </div>
    );
};

export default ProgressBar;
