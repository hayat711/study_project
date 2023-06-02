'use client';
import React from 'react';
import AssignmentDetail from './AssignmentDetail';
import { XCircleIcon , PlusCircleIcon } from '@heroicons/react/24/outline';
import AddAssignment from './AddAssignment';
import TaskSwiper from './TaskSwiper';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const AssignmentCard = () => {
    const router = useRouter();
    
    let assignmentState = useSelector((state : RootState) => state.assignment);

    const { assignments } = assignmentState;

    // Demo task statistics
    const taskStats = {
        totalTasks: assignments.length ? assignments.length : 0,
        completedTasks: assignments.length ? assignments.length - 2 : 0,
        pendingTasks: assignments.length ? 2 : 0,
    };

    return (
        <>
            <div
                className='px-4 py-2 max-h-full bg-base-300 rounded-lg shadow-lg overflow-y-auto relative
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
                <TaskSwiper assignments={assignments} />
                
               

                <div className='flex justify-center'>
                    <label htmlFor='create-assignment'>
                        <div className=' btn mt-4 btn-wide normal-case btn-sm px-6 btn-accent text-accent-content hover:scale-105'>
                            <span>Add new assignment</span>
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
