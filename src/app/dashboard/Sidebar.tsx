'use client';
import React, { useState } from 'react';

type Props = {};

const Sidebar = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!open);
    };

    return (
        <>
            <div className='flex'>
                {/* Hamburger Menu */}
                <button className='block lg:hidden' onClick={toggleSidebar}>
                    {/* Hamburger Icon */}
                    {isOpen ? (
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
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    ) : (
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
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    )}
                </button>

                {/* Sidebar */}
                <div className={`grid grid-cols-1 grid-grow-col mt-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                    <div className='flex flex-col justify-between gap-2'>
                        {/* 주제 */}
                        <div className='sidebar-item px-4 py-2'>
                            <div className='flex font-semibold '>주제</div>
                            <div className='font-normal flex'>http</div>
                            <div className='font-normal flex'>http 2</div>
                            <div className='font-normal flex'>http 3</div>
                            <div className='font-normal flex'>http 4</div>
                            <div className='font-normal flex'>See more</div>
                        </div>
                        {/* map over the Subject component */}

                        {/* 구성원 */}
                        <div className='sidebar-item px-4 py-2'>
                            <div className='flex font-semibold '>주제</div>
                            <div className='font-normal flex'>http</div>
                            <div className='font-normal flex'>http 2</div>
                            <div className='font-normal flex'>http 3</div>
                            <div className='font-normal flex'>http 4</div>
                            <div className='font-normal flex'>See more</div>
                        </div>
                        {/* map over the memebers component */}

                        {/* 출석 */}
                        <div className='sidebar-item px-4 py-2'>
                            <div className='flex font-semibold '>주제</div>
                            <div className='font-normal flex'>http</div>
                            <div className='font-normal flex'>http 2</div>
                            <div className='font-normal flex'>http 3</div>
                            <div className='font-normal flex'>http 4</div>
                            <div className='font-normal flex'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
