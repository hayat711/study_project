//@ts-nocheck
import { Assignment } from '@/utils/types.dt';
import React from 'react';

type Props = {
    assignment: Assignment;
    showDetail?: boolean;
};

const AssignmentDetail = ({ assignment }: Props) => {
    return (
        <div>
            <div className='mb-4 max-h-full max-w-full '>
                <h4 className='text-base font-medium my-4 mx-auto'>{assignment.title}</h4>
                <p className='text-sm text-gray-500'>Deadline: {assignment.deadline}</p>
                <progress className='progress progress-primary w-56' value={assignment.progress} max='100'></progress>
                <p className={`text-sm ${assignment.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {assignment.status}
                </p>
                <p className='font-semibold text-sm my-1'>Assignment Deadline:</p>
                <div className='ml-4 grid grid-flow-col gap-5 text-center text-sm content-center auto-cols-max'>
                    <div className='flex flex-col'>
                        <span className='countdown font-mono text-sm'>
                            <span style={{ '--value': 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className='flex flex-col'>
                        <span className='countdown font-mono text-sm'>
                            <span style={{ '--value': 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className='flex flex-col'>
                        <span className='countdown font-mono text-sm'>
                            <span style={{ '--value': 24 }}></span>
                        </span>
                        min
                    </div>
    
                </div>
                <div className="text-sm pb-1 opacity-0"> keep going</div>
            </div>
        </div>
    );
};

export default AssignmentDetail;
