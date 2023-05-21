import React from 'react';
import { UserCircleIcon, BellIcon, CogIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import UserDetails from './UserDetails';

const UserCard = () => {
    return (
        <div>
            <div className='flex flex-col relative'>
                <UserDetails />
                {/* <div className="absolute grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-primary-focus bg-opacity-30 backdrop-blur-[4px]  p-2 max-h-28 bottom-0">
                    <LockClosedIcon className=' w-10 h-10 col-start-2 text-red-600 text-3-opacity-75 mt-3  ml-16' />
                </div> */}
                <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-base-300  rounded-lg shadow-sm p-2 max-h-52'>
                    {/* User Profile */}
                    <div className='user-item'>
                        <div className='flex items-center justify-center p-2'>
                            <UserCircleIcon className='w-10 h-10 text-accent' />
                        </div>
                        <div className='user-mini-card'>
                            User name
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className='user-item'>
                        <div className='flex items-center justify-center p-2'>
                            <BellIcon className='w-10 h-10 text-accent' />
                        </div>
                        <div className='user-mini-card'>
                            5 Notifications
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className='user-item'>
                        <div className='flex items-center justify-center p-2'>
                            <CogIcon className='w-10 h-10 text-accent' />
                        </div>
                        <div className='user-mini-card'>
                            Quick Actions
                        </div>
                    </div>

                    {/* Recent Activity */}
                    {/* <div className='flex flex-col items-stretch bg-base-200 w-full rounded-md shadow-sm hover:shadow-secondary'>
                        <div className='flex items-center justify-center '>
                            <ClockIcon className='w-8 h-8 text-accent' />
                        </div>
                        <div className='flex justify-center px-2 py-3 font-semibold text-sm text-secondary'>
                            Recent Activity
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
