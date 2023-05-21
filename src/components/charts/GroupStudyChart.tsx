//@ts-nocheck
import React from 'react';

type Props = {};

const GroupStudyChart = (props: Props) => {
    return (
        <>
            <div className='text-xs py-2 px-1 text-secondary-content'>The Over all progress of the group-study</div>
            <div className='flex justify-center items-center mx-auto my-auto'>
                <div className='flex flex-col gap-4'>
                    <div className='radial-progress text-accent-focus' style={{ '--value': 45 }}>
                        45%
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='indicator-item badge badge-xs badge-accent'></span>
                        <div className='font-thin'>Group-Study</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupStudyChart;
