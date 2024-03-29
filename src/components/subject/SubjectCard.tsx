'use client';
import React from 'react';
import { CheckBadgeIcon, PlusCircleIcon, BookOpenIcon, DocumentCheckIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { Subject } from '@/utils/types.dt';
import SubjectDetails from './SubjectDetails';
import AddSubject from './AddSubject';
import subjects from '@/constants/subjects';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type Props = {
    subject?: Subject;
};

const SubjectCard = ({ subject }: Props) => {
    let subjectState = useSelector((state: RootState) => state.subject);
    // const { subjects } = subjectState;

    let assignmentState = useSelector((state: RootState) => state.assignment);
    const { assignments } = assignmentState;

    const totalActiveSubject = subjects.length;
    const totalActiveAssignment = assignments.length;

    return (
        <>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 md:w-full md:h-full bg-base-300 rounded-lg shadow-sm p-2'>
                {/* Container for add subject and active subjects */}
                <div className='flex flex-col gap-4 rounded-lg'>
                    {/* Add new subject card */}
                    <div className='flex flex-col -gap-4 items-stretch bg-secondary bg-opacity-10 rounded-md shadow-sm hover:shadow-secondary'>
                        <div className='flex items-center justify-between px-6 pt-2 my-2 relative '>
                            <div className='text-sm text-primary-focus'>Add New</div>
                            <span className=' hover:scale-105 hover:cursor-pointer absolute top-2 left-28'>
                                <label htmlFor='create-subject' className='cursor-pointer'>
                                    <PlusCircleIcon className='w-10 h-10 text-accent hover:text-accent-focus' />
                                </label>
                            </span>
                        </div>
                        <div className={` text-medium font-semibold px-6 pb-3 text-primary-focus `}>Subject</div>
                    </div>

                    {/* Active subjects */}
                    <div className='flex h-full items-center justify-center bg-base-200 rounded-md shadow-sm '>
                        <div className='flex p-2 font-semibold text-sm'>
                            <div className='flex flex-col justify-between items-center'>
                                <span className='items-center'>
                                    <span className='flex items-center gap-1'>
                                        <BookOpenIcon className='w-4 h-4 text-accent-focus' />
                                        <span>Active</span>
                                    </span>
                                </span>
                                <span className='font-bold text-lg text-secondary-focus'>
                                    {totalActiveSubject ? totalActiveSubject : '0'}{' '}
                                </span>
                                <span className='items-center'>
                                    <span className='flex items-center gap-1'>
                                        <CheckBadgeIcon className='w-4 h-4 text-accent-focus' />
                                        <span>Done</span>
                                    </span>
                                </span>
                                <span className='font-bold text-lg text-secondary-focus'>
                                    {totalActiveSubject ? totalActiveSubject : '0'}
                                </span>
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
                                <span className='font-bold text-lg text-secondary-focus'>
                                    {totalActiveAssignment ? totalActiveAssignment : '0'}
                                </span>
                                <span className='items-center'>
                                    <span className='flex items-center gap-1'>
                                        <CheckBadgeIcon className='w-4 h-4 text-accent-focus' />
                                        <span>Done</span>
                                    </span>
                                </span>
                                <span className='font-bold text-lg text-secondary-focus'>
                                    {totalActiveAssignment ? totalActiveAssignment : '0'}{' '}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container for another section about subjects like today's subjects */}
                <div
                    className='flex lg:col-span-2 lg:cols-start-2 flex-col items-stretch bg-base-200 p-4 rounded-lg shadow-md  h-[14rem] overflow-hidden overflow-y-auto
                scrollbar-thin
            '
                >
                    <div className='text-sm font-bold mt-0 pb-2 text-primary-focus'>Current Active Subjects:</div>
                    {subjects.map((subject) => (
                        <div className='text-xs flex flex-col gap-4' key={subject.id}>
                            <SubjectDetails subject={subject} />
                        </div>
                    ))}
                    <SubjectDetails />
                    {/* <SubjectSwiper subjects={subjects} /> */}
                </div>
            </div>

            {/* adding required modals */}
            {/* <AddSubjectModal /> */}
            <input type='checkbox' name='add-subject' id='create-subject' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <label htmlFor='create-subject' className='absolute cursor-pointer right-3 top-3'>
                        <XCircleIcon className='w-10 h-10 text-accent' />
                    </label>
                    <AddSubject />
                </div>
            </div>
        </>
    );
};

export default SubjectCard;
