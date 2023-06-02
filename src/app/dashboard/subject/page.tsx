'use client';

import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const Home = (props: Props) => {
    let subjectState = useSelector((state: RootState) => state.subject);
    const { subjects } = subjectState;
    if (!subjects) {
        return (
            <div>
                <div className='card w-96 bg-base-100 shadow-xl '>
                    <div className='card-body'>
                        <h2 className='card-title'>
                            {'Subject Title : '}
                            <div className='badge badge-secondary'>NEW</div>
                        </h2>
                        <p>{'Subject study method :'}</p>
                        <div className='card-actions justify-end'>
                            <div className='badge badge-outline'>Study</div>
                            <div className='badge badge-outline'>Active</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className=''>
            <div className='gird mx-8 my-4'>
                <h1 className='text-xl uppercase font-black'>Subjects List</h1>
                {subjects.map((subject, index) => (
                    // Subject Card
                    <div className='card w-96 bg-base-100 shadow-xl ' key={index}>
                        <div className='card-body'>
                            <h2 className='card-title'>
                                {subject?.title ? subject?.title : 'Subject Title'}
                                <div className='badge badge-secondary'>NEW</div>
                            </h2>
                            <p>{subject.studyMethod ? subject.studyMethod : 'Subject study method'}</p>
                            <div className='card-actions justify-end'>
                                <div className='badge badge-outline'>Study</div>
                                <div className='badge badge-outline'>Active</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
