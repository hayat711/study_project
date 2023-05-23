import { Subject } from '@/utils/types.dt';
import React from 'react';

type Props = {
    subject?: Subject;
};

const SubjectDetails = ({ subject }: Props) => {
    return (
        <div>
            <div className='card w-full rounded-md bg-secondary bg-opacity-25 h-28 shadow-md '>
                <div className='px-2 py-2 mx-0 my-0 flex flex-col justify-between'>
                    <h2 className='text-medium font-semibold my-0 flex-1 pl-2'>Title: {subject?.title}</h2>
                    <p className='ml-4 text-xs'>Description:{subject?.description}</p>

                    <h2 className='text-medium font-semibold my-0 flex-1 pl-2 mt-2'>
                        Created: {subject?.createdAt.toLocaleDateString()}
                    </h2>
                    <p className='ml-4 text-xs'>Updated: {subject?.createdAt.toLocaleDateString()}</p>
                    <div className='card-actions justify-end mb-0 items-end'>
                        <button className='btn btn-sm normal-case rounded-lg btn-ghost text-xs text-accent-focus'>
                            Show More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetails;
