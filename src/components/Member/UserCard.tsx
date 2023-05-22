'use client';
import React from 'react';
import { UserCircleIcon, BellIcon, CogIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import UserDetails from './UserDetails';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const UserCard = () => {
    const isUserPageOpen = useSelector((state: RootState) => state.dashboard.isUserPageOpen);

    return (
        <div className=''>
            <div className='flex flex-col relative'>
                <div className='drawer max-h-52 rounded-md shadow-lg bg-base-300'>
                    <input type='checkbox' id='profile-drawer' className='drawer-toggle' checked={isUserPageOpen} />
                    <div className='drawer-content'>
                        {/* user profile content here */}
                    </div>
                    <div className='drawer-side'>
                        <label htmlFor='profile-drawer' className='drawer-overlay'></label>
                        <ul className='menu p-4 w-full max-h-52  bg-base-300 text-base-content'>
                            {/* profile options like logout, update ... */}
                            <li>
                                <a>Logout</a>
                            </li>
                            <li>
                                <a>Update Avatar</a>
                            </li>
                            <li>
                                <a>Change Password</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {isUserPageOpen ? null : (
                    <div className='absolute top-0 left-0'>
                        <UserDetails />
                        <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-base-300  rounded-lg shadow-sm p-2 max-h-52'>
                            {/* User Profile */}
                            <div className='user-item'>
                                <div className='flex items-center justify-center p-2'>
                                    <UserCircleIcon className='w-10 h-10 text-accent' />
                                </div>
                                <div className='user-mini-card'>User name</div>
                            </div>

                            {/* Notifications */}
                            <div className='user-item'>
                                <div className='flex items-center justify-center p-2'>
                                    <BellIcon className='w-10 h-10 text-accent' />
                                </div>
                                <div className='user-mini-card'>5 Notifications</div>
                            </div>

                            {/* Quick Actions */}
                            <div className='user-item'>
                                <div className='flex items-center justify-center p-2'>
                                    <CogIcon className='w-10 h-10 text-accent' />
                                </div>
                                <div className='user-mini-card'>Quick Actions</div>
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
                )}

                {/* <div className="absolute grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-primary-focus bg-opacity-30 backdrop-blur-[4px]  p-2 max-h-28 bottom-0">
                    <LockClosedIcon className=' w-10 h-10 col-start-2 text-red-600 text-3-opacity-75 mt-3  ml-16' />
                </div> */}
            </div>
        </div>
    );
};

export default UserCard;
