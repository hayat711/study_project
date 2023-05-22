'use client';
import React from 'react';
import AssignmentDetail from './AssignmentDetail';
import { XCircleIcon } from '@heroicons/react/24/solid';
import AddAssignment from './AddAssignment';

const AssignmentCard = () => {
    // Demo assignment data
    const assignments = [
        {
            id: '1-A',
            title: 'Assignment 1',
            deadline: '2023-06-15',
            status: 'pending',
            progress: 2,
            description: '',
        },
        {
            id: '2-A',
            title: 'Assignment 2',
            deadline: '2023-06-20',
            status: 'Completed',
            progress: 100,
            description: '',
        },
    ];

    // Demo task statistics
    const taskStats = {
        totalTasks: 10,
        completedTasks: 6,
        pendingTasks: 4,
    };

    return (
        <>
            <div
                className='px-4 py-2 max-h-full bg-base-300 rounded-lg shadow-lg overflow-y-auto
            scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary-hover scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        '
            >
                <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-medium'>Assignments</h3>
                    <span className='text-sm text-gray-500'>Total: {assignments.length}</span>
                </div>
                <div className='mt-6 bg-secondary bg-opacity-25 rounded-md px-2 py-2 mb-2'>
                    <h4 className='text-base font-semibold text-primary-focus mb-2'>Assignment Statistics</h4>
                    <p className='text-sm text-gray-500'>Total Assignments: {taskStats.totalTasks}</p>
                    <p className='text-sm text-green-500'>Completed Assignments: {taskStats.completedTasks}</p>
                    <p className='text-sm text-red-500'>Pending Assignments: {taskStats.pendingTasks}</p>
                </div>
                <div className='overflow-y-auto'>
                    {assignments.map((assignment) => (
                        <div className='flex flex-col gap-5 px-2 py-1 bg-secondary bg-opacity-5 rounded-md shadow-xs hover:shadow-secondary '>
                            <AssignmentDetail key={assignment.id} assignment={assignment} />
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    <label htmlFor='create-assignment'>
                        <div className='btn mt-4 btn-wide normal-case btn-sm px-6 btn-accent text-accent-content hover:scale-105'>
                            Add to the Assignments
                        </div>
                    </label>
                </div>
            </div>

            {/* Adding Assignment modal */}
            <input type='checkbox' name='add-assignment' id='create-assignment' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <label htmlFor='create-assignment' className='absolute cursor-pointer right-3 top-3'>
                        <XCircleIcon className='w-10 h-10 text-accent' />
                    </label>
                    <AddAssignment />
                </div>
            </div>
        </>
    );
};

export default AssignmentCard;
