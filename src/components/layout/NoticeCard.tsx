import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const NoticeCard = (props: Props) => {

  const notices = [
    {
      id: 1,
      title: 'Task Reminder ⏰',
      description: 'Complete assignment 1 by tomorrow.',
    },
    {
      id: 2,
      title: 'Deadline Approaching 🏃',
      description: 'Final project submission due in 3 days.',
    },
    {
      id: 3,
      title: 'New Notification 📅',
      description: 'You have a new message from your instructor.',
    },
  ];

  return (
    <div className="p-4  shadow rounded-md">
      <h3 className="text-lg font-medium mb-2">Upcoming</h3>
      {notices.map((notice) => (
        <div key={notice.id} className="mb-2 pl-1">
          <h4 className="font-normal text-sm">{notice.title}</h4>
          <p className="text-xs text-primary-focus">{notice.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticeCard;
