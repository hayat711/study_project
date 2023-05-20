import React from 'react';
import { HomeIcon, BookOpenIcon, UserCircleIcon, ChartPieIcon } from '@heroicons/react/24/outline';
type Props = {};

const Navbar = (props: Props) => {
    return (
        <div>
            <div className='flex h-12  px-4 items-center justify-end gap-12'>
                <div className='navbar-btn'>
                    <HomeIcon className='h-6 w-6' />
                    <span>Home</span>
                </div>
                <div className='navbar-btn'>
                    <BookOpenIcon className='h-6 w-6' />
                    Study
                </div>

                <div className='navbar-btn'>
                    <ChartPieIcon className='h-6 w-6' />
                    Dashboard
                </div>
                <div className='navbar-btn'>
                    <UserCircleIcon className='h-6 w-6' />
                    Profile
                </div>
            </div>
        </div>
    );
};

export default Navbar;
