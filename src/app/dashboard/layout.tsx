'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import SideMenu from '../../components/layout/SideMenu';
import SidebarInfo from '@/components/layout/SidebarInfo';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    const [navbar, setNavbar] = useState<boolean>(false);

    useEffect(() => {
        const changeBg = () => {
            if (window.scrollY >= 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };
        window.addEventListener('scroll', changeBg);
        return () => {
            window.removeEventListener('scroll', changeBg);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className='flex min-h-screen flex-col'>
                {/* <div className={`sticky top-0 z-10 bg-opacity-10 ${navbar ? 'bg-black backdrop-blur-xl' : ''}`}>
                    {navbar && <Navbar />}
                </div> */}
                <div className='flex flex-col sm:flex-row gap-3'>
                    {/* sidebar */}
                    <div className='w-full sm:w-[200px] min-h-full max-h-screen'>
                        {/* <Sidebar /> */}
                        <SideMenu />
                    </div>
                    {/* main dashboard */}
                    <div className='flex w-full bg-base-300 max-h-screen sm:w-8/12 min-h-screen'>{children}</div>

                    <div className='flex w-full md:w-2/12 min-h-screen max-h-screen sm:hidden md:block right-0 top-0 fixed'>
                        <SidebarInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
