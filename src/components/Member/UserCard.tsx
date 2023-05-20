import React from 'react';
import { UserCircleIcon, BellIcon, CogIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const UserCard = () => {
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-base-300 rounded-lg shadow-sm p-2 max-h-52'>
            {/* User Profile */}
            <div className='flex flex-col items-stretch bg-base-200 rounded-md shadow-sm hover:shadow-secondary'>
                <div className='flex items-center justify-center p-2'>
                    <UserCircleIcon className='w-10 h-10 text-accent' />
                </div>
                <div className='flex justify-center px-2 py-3 font-semibold text-sm text-secondary'>John Doe</div>
            </div>

            {/* Notifications */}
            <div className='flex flex-col items-stretch bg-base-200 rounded-md shadow-sm hover:shadow-secondary'>
                <div className='flex items-center justify-center p-2'>
                    <BellIcon className='w-10 h-10 text-accent' />
                </div>
                <div className='flex justify-center px-2 py-3 font-semibold text-sm text-secondary'>
                    5 Notifications
                </div>
            </div>

            {/* Quick Actions */}
            <div className='flex flex-col items-stretch bg-base-200 rounded-md shadow-sm hover:shadow-secondary'>
                <div className='flex items-center justify-center p-2'>
                    <CogIcon className='w-10 h-10 text-accent' />
                </div>
                <div className='flex justify-center px-2 py-3 font-semibold text-sm text-secondary'>Quick Actions</div>
            </div>

            {/* Recent Activity */}
            <div className='flex flex-col items-stretch bg-base-200 w-full rounded-md shadow-sm hover:shadow-secondary'>
                <div className='flex items-center justify-center '>
                    <ClockIcon className='w-8 h-8 text-accent' />
                </div>
                <div className='flex justify-center px-2 py-3 font-semibold text-sm text-secondary'>
                    Recent Activity 
                </div>
            </div>

        </div>
    );
};

export default UserCard;
