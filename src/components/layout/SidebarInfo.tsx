import { themes } from '@/constants/themes';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';
import Calendar from 'react-calendar';

type Props = {};

const SidebarInfo = (props: Props) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className='-ml-12'>
            <div className='flex flex-col items-stretch  bg-base-200 text-base-content gap-8 justify-start py-2 px-2 min-h-screen'>
                {/* profile and notification */}
                <div className='flex justify-start gap-2 bg-base-300  rounded-md'>
                    {/* avatar - username */}
                    <div className='flex justify-between items-end'>
                        <img
                            src='/rohee.gif'
                            alt='avatar'
                            className='w-12 h-12 rounded-full shadow-2xl border-2 border-rose-300'
                        />
                        <span className='ml-2 text-xs text-base-content font-semibold'>로회</span>
                    </div>
                    {/* themes */}
                    <div className=''>
                        <div className='navbar-end'>
                            <div className='flex-none'>
                                <ul className='menu menu-horizontal'>
                                    <li tabIndex={0}>
                                        <a>
                                            <p className='text-sm font-semibold'>Theme</p>
                                            <svg
                                                className='fill-current'
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                                            </svg>
                                            <svg
                                                className='w-6 h-6'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                                                ></path>
                                            </svg>
                                        </a>
                                        <ul className='z-50 w-full p-2 border border-t-0 '>
                                            {themes.map((theme, index) => (
                                                <li key={index} onClick={() => setTheme(theme.name.toLowerCase())}>
                                                    <a>{theme.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* notification */}
                </div>
                {/* calender */}
                <div className='mx-1 py-4 bottom-6 fixed bg-base-300 p-2 rounded-lg '>
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default SidebarInfo;
