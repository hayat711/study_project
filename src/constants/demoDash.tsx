// Import necessary dependencies
import SubjectCard from '@/components/subject/SubjectCard';
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className='min-h-screen min-w-full bg-base-100 text-base-content'>
            <div className='container mx-auto py-8 px-4'>
                <div className='grid grid-cols-1 justify-stretch justify-items-stretch w-full gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8'>
                    {/* User Section */}
                    <div className='md:col-span-2 lg:col-span-3 xl:col-span-2 lg:row-span-2'>
                        {/* <UserSection /> */}
                        <div className='bg-primary-content rounded-lg h-60'>User Section bg-primary-content</div>
                    </div>

                    {/* Subject Section */}
                    <div className='md:col-span-2 lg:col-span-4 xl:col-span-3 lg:row-span-2'>
                        {/* <SubjectSection /> */}
                        <div className='bg-base-200 w-full h-full rounded-lg shadow-sm '>
                            <SubjectCard />
                        </div>
                    </div>

                    {/* Assignment Section */}
                    <div className='md:col-span-1 lg:col-span-2 row-span-3 xl:col-span-1'>
                        {/* <AssignmentSection /> */}
                        <div className='bg-primary  rounded-lg w-full h-full'>Assignment Section bg-primary</div>
                    </div>

                    {/* Progress Section */}
                    <div className='md:col-span-1 xl:col-span-1'>
                        {/* <ProgressSection /> */}
                        <div className='bg-base-200 w-full h-full'>Progress Section</div>
                    </div>

                    {/* Placeholder 1 */}
                    <div className='md:col-span-2 lg:col-span-1 xl:col-span-1'>
                        {/* Add your component here */}
                        <div className='bg-base-200 h-96'>Line Chart</div>
                    </div>

                    {/* Placeholder 2 */}
                    <div className='md:col-span-2 lg:col-span-2 xl:col-span-2'>
                        {/* Add your component here */}
                        <div className='bg-base-200 h-96'>Chart Section</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
