//@ts-nocheck
import React from 'react';

type Props = {};

const SelfStudy = (props: Props) => {
    return (
        <>
            <div className='text-xs py-2 px-1'>The Over all progress of the Self-study</div>
            <div className='flex justify-center items-center mx-auto my-auto'>
                <div className='flex flex-col gap-4'>
                    <div className='radial-progress text-primary' style={{ '--value': 70 }}>
                        70%
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='indicator-item badge badge-xs badge-primary'></span>
                        <div className='font-thin'>Self-Study</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelfStudy;
