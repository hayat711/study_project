import { themes } from '@/constants/themes';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';
import Calendar from 'react-calendar';
import NoticeCard from './NoticeCard';
import NoticeBar from './NoticeBar';

type Props = {};

const SidebarInfo = (props: Props) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className='-ml-12'>
            <div className='flex flex-col items-stretch  bg-base-200 text-base-content gap-8 justify-start py-2 px-2 min-h-screen'>
                {/* profile and notification */}
                <div className='flex justify-between gap-2 bg-base-300  rounded-md'>
                    {/* avatar - username */}
                    <div className='flex justify-between items-end'>
                        <img
                            src='/rohee.gif'
                            alt='avatar'
                            className='w-12 h-12 rounded-full shadow-2xl border-2 border-rose-300'
                        />
                        <span className='ml-2 text-xs text-base-content font-semibold'>로회</span>
                    </div>
                    
                    {/* notification */}
                </div>
                {/* calender */}
                <div className='mx-1  bg-base-300 p-2 rounded-lg '>
                    <Calendar />
                </div>
                <div>
                    <NoticeCard />
                </div>
                <div className='overflow-y-auto'>
                    <NoticeBar />
                </div>
            </div>
        </div>
    );
};

export default SidebarInfo;
