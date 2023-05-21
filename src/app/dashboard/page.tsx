import UserCard from '@/components/Member/UserCard';
import AssignmentCard from '@/components/assignment/AssignmentCard';
import AttendanceChart from '@/components/charts/AttendanceChart';
import BarChartCard from '@/components/charts/BarChart';
import GroupStudyChart from '@/components/charts/GroupStudyChart';
import ProgressBar from '@/components/charts/ProgressBar';
import SelfStudy from '@/components/charts/SelfStudy';
import TaskChart from '@/components/charts/TaskChart';
import SubjectCard from '@/components/subject/SubjectCard';
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className='min-h-screen min-w-full bg-base-100 text-base-content'>
            <div className='font-semibold px-8 pt-1 text-primary'>Dashboard</div>
            <div className='container mx-auto py-1 px-4 flex flex-col gap-6'>
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
                        <div className='bg-base-200 rounded-lg w-full h-full max-h-[465px] min-h-full overflow-hidden'>
                            <AssignmentCard />
                        </div>
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
                        {/* component to show the overall progress of all task related to group-study*/}

                        <div className='chart-container flex flex-col'>
                            {/* <ProgressBar /> */}
                            <GroupStudyChart />
                        </div>
                    </div>

                    {/* مکان برای آمار و ارقام  */}
                    <div className='md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        {/* component to show the overall progress of all task related with self-studying */}
                        <div className='chart-container flex flex-col'>
                            {/* <AttendanceChart /> */}
                            <SelfStudy />
                        </div>
                    </div>

                    {/* Attendance CHart using line Chart*/}
                    <div className='md:col-span-2 lg:col-span-2 xl:col-span-2'>
                        <div className='chart-container max-h-60 overflow-none'>
                            <TaskChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
