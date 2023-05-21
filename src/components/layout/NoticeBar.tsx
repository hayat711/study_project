import React from 'react';
import NoticeCard from './NoticeCard';

type Props = {};

const NoticeBar = (props: Props) => {
    const notices = [
        {
            id: 1,
            title: 'Task Completed ✅',
            description: 'You have successfully completed Task 1.',
        },
        {
            id: 2,
            title: 'Subject Created 📚',
            description: 'You have created a new subject: Mathematics.',
        },
        {
            id: 3,
            title: 'Group Joined',
            description: 'You have joined the study group: Group A.',
        },
        {
            id: 4,
            title: 'Deadline Missed ⚠️',
            description: 'You missed the deadline for Assignment 2.',
        },
    ];

    return (
        <div className='px-4  shadow rounded-md'>
            <h3 className='text-lg font-medium mb-2'>Recent Activities</h3>
            {notices.map((notice) => (
                <div key={notice.id} className='mb-2 pl-1'>
                    <h4 className='font-normal text-sm'>{notice.title}</h4>
                    <p className='text-xs text-primary-focus'>{notice.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NoticeBar;
