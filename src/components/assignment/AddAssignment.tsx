import { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikState, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Status } from '@/utils/types.dt';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@/store/store';
import ErrorField from '../error/ErrorField';

type SubjectValues = {
    title: string | null;
    description?: string | null;
    status?: Status | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    resource?: any | null;
};

type AssignmentValues = {
    title: string | null;
    description: string | null;
    deadline: Date | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    resource?: any | null;
    progress?: number | null;
    status?: Status | null;
};

type Props = {};

const AddAssignment: React.FC = (props: Props) => {
    const [ApiErrors, setAPIErrors] = useState<any>({});
    const [ApiResponse, setAPIResponse] = useState<any>('');
    const dispatch = useDispatch<Dispatch>();

    const createAssignmentValues: AssignmentValues = {
        title: '',
        description: '',
        status: Status.NOT_STARTED,
        createdAt: new Date(),
        updatedAt: new Date(),
        resource: null,
        progress: 0,
        deadline: new Date(),
    };

    const createAssignmentSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        status: Yup.string().required(
            'Status is required & should be either NOT_STARTED, IN_PROGRESS, COMPLETED, PENDING, or CANCELLED'
        ),
        createdAt: Yup.date(),
        updatedAt: Yup.date(),
        resource: Yup.object(),
        progress: Yup.number(),
        deadline: Yup.date(),
    });

    const submitCreateAssignment = async (values: AssignmentValues, helpers: FormikHelpers<AssignmentValues>) => {
        try {
            const res = await axios.post(`/assignment`, values);
            // dispatch.assignment.loadAssignmentsAsync();
            // TODO load the assignments in redux store

            setAPIResponse(res.data);
            helpers.resetForm();
        } catch (error) {
            if (error instanceof AxiosError) {
                setAPIResponse(error.response!.data);
                console.log(error!.response!.data.errors);
            }
        }
    };

    //TODO add enum selection option for status
    //TODO add date picker for the deadline -->  react-date-picker

    return (
        <div>
            <div
                className='flex mx-auto w-96 overflow-y-auto scrollbar-thin'
            >
                {/* modal to create an assignment */}
                {ApiResponse.success ? (
                    <p className='p-4 m-10 mx-auto font-bold text-center border text-md text-success rounded-xl border-success'>
                        {ApiResponse.message}
                    </p>
                ) : ApiResponse.message ? (
                    <p className='p-4 m-10 mx-auto font-bold text-center border rounded-xl border-error text-md text-error'>
                        {ApiResponse.message}
                    </p>
                ) : null}
                <div
                    className='flex flex-col m-4 mx-auto 
            scrollbar-thin scrollbar-thumb-primary-700 scrollbar-track-primary-100 scrollbar-thumb-rounded-full '
                >
                    <h1 className='text-2xl font-bold text-center pb-2'>Create Assignment</h1>
                    <Formik
                        initialValues={createAssignmentValues}
                        validationSchema={createAssignmentSchema}
                        onSubmit={submitCreateAssignment}
                    >
                        {({ isSubmitting, errors, touched }: FormikState<AssignmentValues>) => (
                            <Form>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Assignment title</span>
                                        </label>
                                        <Field
                                            placeholder='Enter assignment title'
                                            type='text'
                                            name='title'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.title && touched.title ? <ErrorField error={errors.title} /> : null}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Assignment description</span>
                                        </label>
                                        <Field
                                            placeholder='Enter assignment description'
                                            type='text'
                                            name='description'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted  placeholder-sm`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.description && touched.description ? (
                                                <ErrorField error={errors.description} />
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Assignment status</span>
                                        </label>
                                        <Field
                                            placeholder='Enter assignment status'
                                            type='text'
                                            name='status'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted placeholder-xs `}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.status && touched.status ? (
                                                <ErrorField error={errors.status} />
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Assignment deadline</span>
                                        </label>
                                        <Field
                                            placeholder='Pick assignment deadline'
                                            type='date'
                                            name='deadline'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.deadline && touched.deadline ? (
                                                <ErrorField error={errors.deadline} />
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Assignment resource</span>
                                        </label>
                                        <Field
                                            placeholder='Enter assignment resource'
                                            type='text'
                                            name='resource'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.resource && touched.resource ? (
                                                <ErrorField error={errors.resource} />
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full my-2 btn normal-case text-primary text-lg'
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddAssignment;
