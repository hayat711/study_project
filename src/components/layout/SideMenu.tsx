'use client';
import React from 'react';
import {
    Cog6ToothIcon,
    BookOpenIcon,
    UserCircleIcon,
    ChartPieIcon,
    AcademicCapIcon,
    CakeIcon,
    CheckIcon,
} from '@heroicons/react/24/outline';
import ThemeSelector from './ThemeSelector';

type Props = {};

const SideMenu = (props: Props) => {
    const [activeMenu, setActiveMenu] = React.useState<string>('Dashboard');

    const handleActiveMenu = (menu: string) => {
        setActiveMenu(menu);
    };

    return (
        <div className='bg-secondary  min-h-screen w-[220px] text-base-content pr-2 shadow-xl '>
            <div className='flex flex-col gap-5 pt-8 mx-2 divide-y-2 divide-secondary-focus divide-opacity-25'>
                {/* Hamburger Menu */}
                <div className='font-extrabold text-xl text-content-focus pb-2 px-2'>Study Dashboard</div>
                <div className='pl-2'>
                    <ul className='flex flex-col gap-4 font-semibold text-sm mt-2 -mr-2'>
                        <li
                            onClick={() => handleActiveMenu('Dashboard')}
                            className={`side-btn mt-2  ${activeMenu === 'Dashboard' ? 'bg-base-100 ' : ''}`}
                        >
                            <span className='mr-'>
                                <AcademicCapIcon className='h-6 w-6' />
                            </span>
                            Dashboard
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Assignments')}
                            className={`side-btn ${activeMenu === 'Assignments' ? 'bg-base-100 ' : ''}`}
                        >
                            <span className='mr-'>
                                <ChartPieIcon className='h-6 w-6' />
                            </span>
                            Assignments
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Subjects')}
                            className={`side-btn  ${activeMenu === 'Subjects' ? 'bg-base-100 ' : ''}`}
                        >
                            <span className='mr-'>
                                <BookOpenIcon className='h-6 w-6' />
                            </span>
                            Subjects
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Profile')}
                            className={`side-btn ${activeMenu === 'Profile' ? 'bg-base-100 ' : ''}`}
                        >
                            <span className='mr-'>
                                <UserCircleIcon className='h-6 w-6' />
                            </span>
                            Profile
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Settings')}
                            className={`side-btn ${activeMenu === 'Settings' ? 'bg-base-100 ' : ''}`}
                        >
                            <span className='mr-'>
                                <Cog6ToothIcon className='h-6 w-6' />
                            </span>
                            Settings
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4 pl-2 mt- min-h-96 justify-between h-28'>
                    <ThemeSelector />
                </div>
                <div className=''>
                    <div className='text-md font-semibold mt-4 ml-4'>Attendance Record</div>
                    <div className='flex flex-col ml-6 '>
                        <div className=''>
                            <div className='stat stat-sm'>
                                <div className='stat-title'>This Week</div>
                                <div className='stat-value text-lg'>5/5</div>
                                <div className='stat-desc'>Feb 1st to Feb 7th</div>
                            </div>

                            <div className='stat'>
                                <div className='stat-title'>This Month</div>
                                <div className='stat-value text-lg'>22/30</div>
                                <div className='stat-desc'>↗︎ 78%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
