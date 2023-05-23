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
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@/store/store';

type Props = {};

const SideMenu = (props: Props) => {
    const [isProfileOpen, setIsProfileOpen] = React.useState<boolean>(false);
    const { activeMenu: currentMenu } = useSelector((state: RootState) => state.dashboard);
    const dispatch = useDispatch<Dispatch>();

    const handleActiveMenu = (menu: string) => {
        dispatch.dashboard.setActiveMenu(menu);
    };

    const toggleProfilePage = () => {
        dispatch.dashboard.setIsUserPageOpen(!isProfileOpen);
        setIsProfileOpen(!isProfileOpen);
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
                            className={`side-btn mt-2  ${currentMenu === 'Dashboard' ? 'bg-base-100 ' : ''}`}
                        >
                            <Link href={`/dashboard`}>
                                <div className='flex items-center'>
                                    <span className='mr-2'>
                                        <AcademicCapIcon className='h-6 w-6' />
                                    </span>
                                    Dashboard
                                </div>
                            </Link>
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Assignments')}
                            className={`side-btn ${currentMenu === 'Assignments' ? 'bg-base-100 ' : ''}`}
                        >
                            <Link href={`/dashboard/assignment`}>
                                <div className='text-block no-underline flex items-center'>
                                    <span className='mr-2 '>
                                        <ChartPieIcon className='h-6 w-6' />
                                    </span>
                                    Assignments
                                </div>
                            </Link>
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Subjects')}
                            className={`side-btn  ${currentMenu === 'Subjects' ? 'bg-base-100 ' : ''}`}
                        >
                            <Link href={`/dashboard/subject`}>
                                <div className='flex items-center'>
                                    <span className='mr-2'>
                                        <BookOpenIcon className='h-6 w-6' />
                                    </span>
                                    Subjects
                                </div>
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                handleActiveMenu('Profile');
                                toggleProfilePage();
                            }}
                            className={`side-btn  ${currentMenu === 'Profile' ? 'bg-base-100 ' : ''}`}
                        >
                            <div className='flex items-center'>
                                <span className='mr-2'>
                                    <UserCircleIcon className='h-6 w-6' />
                                </span>
                                Profile
                                {/* profile dropdown */}
                            </div>
                        </li>
                        <li
                            onClick={() => handleActiveMenu('Settings')}
                            className={`side-btn ${currentMenu === 'Settings' ? 'bg-base-100 ' : ''}`}
                        >
                            <Link href={`/dashboard/subject`}>
                                <div className='flex items-center'>
                                    <span className='mr-2'>
                                        <Cog6ToothIcon className='h-6 w-6' />
                                    </span>
                                    Settings
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4 pl-2 mt-2 min-h-96 justify-between h-28'>
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
