'use client';
import React from 'react';
// import { PlusCircleIcon, } from '@heroicons/react/24/outline';
import { CheckBadgeIcon, PlusCircleIcon, BookOpenIcon, DocumentCheckIcon } from '@heroicons/react/24/solid';

import { Subject } from '@/utils/types.dt';
import SubjectDetails from './SubjectDetails';

type Props = {
    subject?: Subject;
};

const SubjectCard = ({ subject }: Props) => {
    const [showMouse, setShowMouse] = React.useState<boolean>(false);

    const toggleShowMouse = () => {
        setShowMouse(true);
    };
    const toggleHideMouse = () => {
        setShowMouse(false);
    };
    return (
        <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-base-300 rounded-lg shadow-sm p-2'>
            {/* Container for add subject and active subjects */}
            <div className='flex flex-col gap-4 rounded-lg'>
                {/* Add new subject card */}
                <div className='flex flex-col -gap-4 items-stretch bg-secondary bg-opacity-10 rounded-md shadow-sm hover:shadow-secondary'>
                    <div className='flex items-center justify-between px-6 pt-2 my-2 relative'>
                        <div className='text-sm text-primary-focus'>Add New</div>
                        <span className=' hover:scale-105 hover:cursor-pointer absolute top-2 left-28'>
                            <PlusCircleIcon className='w-10 h-10 text-accent-focus' />
                        </span>
                    </div>
                    <div className={` text-medium font-semibold px-6 pb-3 text-primary-focus `}>Subject</div>
                </div>

                {/* Active subjects */}
                <div className='flex h-full items-center justify-center bg-base-200 rounded-md shadow-sm hover:shadow-secondary'>
                    <div className='flex p-2 font-semibold text-sm'>
                        <div className='flex flex-col justify-between items-center'>
                            <span className='items-center'>
                                <span className='flex items-center gap-1'>
                                    <BookOpenIcon className='w-4 h-4 text-accent-focus' />
                                    <span>Active</span>
                                </span>
                            </span>
                            <span className='font-bold text-lg text-secondary-focus'>4 </span>
                            <span className='items-center'>
                                <span className='flex items-center gap-1'>
                                    <CheckBadgeIcon className='w-4 h-4 text-accent-focus' />
                                    <span>Done</span>
                                </span>
                            </span>
                            <span className='font-bold text-lg text-secondary-focus'>2</span>
                        </div>
                    </div>
                    <div className='flex p-2 font-semibold text-sm'>
                        <div className='flex flex-col justify-between items-center'>
                            <span className='items-center'>
                                <span className='flex items-center gap-1'>
                                    <DocumentCheckIcon className='w-4 h-4 text-accent-focus' />
                                    <span>Tasks</span>
                                </span>
                            </span>
                            <span className='font-bold text-lg text-secondary-focus'>8 </span>
                            <span className='items-center'>
                                <span className='flex items-center gap-1'>
                                    <CheckBadgeIcon className='w-4 h-4 text-accent-focus' />
                                    <span>Done</span>
                                </span>
                            </span>
                            <span className='font-bold text-lg text-secondary-focus'>5 </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container for another section about subjects like today's subjects */}
            <div
                className='flex lg:col-span-2 lg:cols-start-2 flex-col items-stretch bg-base-200 p-4 rounded-lg shadow-sm hover:shadow-secondary h-[14rem] overflow-hidden overflow-y-auto
                scrollbar-thin
            '
                onMouseEnter={toggleShowMouse}
                onMouseLeave={toggleHideMouse}
            >
                <div className='text-sm font-bold mt-0 pb-2'>Current Active Subjects:</div>
                <div className='text-xs flex flex-col gap-3 relative'>
                    <div className='font-bold absolute bottom-3 right-0'>
                        {/* mouse  */}
                        {showMouse && <img src='/mouse-scroll.png' alt='scroll' className='w-16 h-16 text-accent' />}
                    </div>
                    <SubjectDetails />
                    <SubjectDetails />
                    <SubjectDetails />
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;