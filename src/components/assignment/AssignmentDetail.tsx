import { Assignment } from '@/utils/types.dt';
import React from 'react';

type Props = {
    assignment: Assignment;
};

const AssignmentDetail = ({assignment }: Props) => {
    return (
        <div>
            <div key={assignment.id} className='mb-4'>
                <h4 className='text-base font-medium'>{assignment.title}</h4>
                <p className='text-sm text-gray-500'>Deadline: {assignment.deadline}</p>
                <progress className="progress progress-primary w-56" value={assignment.progress} max="100"></progress>
                <p className={`text-sm ${assignment.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {assignment.status}
                </p>
            </div>
        </div>
    );
};

export default AssignmentDetail;
