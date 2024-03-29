import React from 'react';
import Calendar from 'react-calendar';
import NoticeCard from './NoticeCard';
import NoticeBar from './NoticeBar';
import { BellAlertIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type Props = {};

const SidebarInfo = (props: Props) => {

    const { user } = useSelector((state: RootState) => state.user);


    return (
        <div className='-ml-12'>
            <div className='flex flex-col items-stretch  bg-base-200 text-base-content gap-8 justify-start py-2 px-2 min-h-screen'>
                {/* profile and notification */}
                <div className='flex justify-between gap-2 px-2 rounded-md'>
                    {/* avatar - username */}
                    <div className='flex justify-between items-center'>
                        
                        <UserCircleIcon className='w-12 h-12  rounded-full' />
                        <span className='ml-2 text-xs text-base-content  font-semibold'>{user?.username}</span>
                    </div>

                    {/* notification */}

                    <div className='flex indicator'>
                        <span className='indicator-item badge badge-xs badge-primary'></span>
                        <BellAlertIcon className='w-8 h-8 p-2 bg-base-300 rounded-full' />
                    </div>
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
