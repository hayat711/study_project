import AssignmentDetail from '@/components/assignment/AssignmentDetail';
import { assignments } from '@/constants/assignments';
import { RootState } from '@/store/store';
import { GetServerSideProps } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const page = async (props: Props) => {
    let assignmentsState;
    const { assignments } = useSelector((state: RootState) => state.assignment);
    if (!assignments) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                {assignments.map((assignment) => (
                    <AssignmentDetail key={assignment.id} assignment={assignment} />
                ))}
            </div>
        </div>
    );
};

export default page;
