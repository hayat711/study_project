// Import necessary dependencies
import UserCard from '@/components/Member/UserCard';
import SubjectCard from '@/components/subject/SubjectCard';
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className='min-h-screen min-w-full bg-base-100 text-base-content'>
            <div className='container mx-auto py-8 px-4 flex flex-col gap-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 '>
                    {/* Subject Section */}
                    <div className='md:col-span-2 xl:col-span-3'>
                        {/* <SubjectSection /> */}
                        <div className='bg-base-200 w-full h-full rounded-lg shadow-sm'>
                            <SubjectCard />
                        </div>
                    </div>

                    {/* Assignment Section */}
                    <div className='md:col-span-2 xl:col-span-2 md:row-span-2 xl:row-span-2'>
                        {/* <AssignmentSection /> */}
                        <div className='bg-base-200 rounded-lg w-full h-full'>Assignment Section bg-primary</div>
                    </div>

                    {/* User Section */}
                    <div className='md:col-span-2 xl:col-span-3'>
                        {/* <UserSection /> */}
                        <div className='bg-base-200 rounded-lg h-52'>
                            <UserCard />
                        </div>
                    </div>
                </div>



                <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4'>
                    <div className='grid md:col-span-1'>
                        {/* <ProgressSection /> */}
                        <div className='bg-base-200 w-full h-full'>Progress Section</div>
                    </div>

                    {/* مکان برای آمار و ارقام  */}
                    <div className='md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        {/* Add your component here */}
                        <div className='bg-base-200 h-96'>Line Chart</div>
                    </div>

                    {/* Attendance CHart using line Chart*/}
                    <div className='md:col-span-2 lg:col-span-2 xl:col-span-2'>
                        {/* Add your component here */}
                        <div className='bg-base-200 h-96'>Chart Section</div>
                    </div>
                </div>
                {/* Progress Section */}
            </div>
        </div>
    );
};

export default DashboardPage;
