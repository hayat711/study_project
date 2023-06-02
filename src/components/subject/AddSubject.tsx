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
    studyMethod?: string | null;
    status?: Status | null;
    finishDate?: Date | null;
};

type Props = {};

const AddSubject: React.FC = (props: Props) => {
    const [ApiErrors, setAPIErrors] = useState<any>({});
    const [ApiResponse, setAPIResponse] = useState<any>('');
    const dispatch = useDispatch<Dispatch>();

    const createSubjectValues: SubjectValues = {
        title: '',
        studyMethod: '',
        status: Status.NOT_STARTED,
        finishDate: new Date(),
    };

    const createSubjectSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        studyMethod: Yup.string(),
        status: Yup.string().required(
            'Status is required & should be either NOT_STARTED, IN_PROGRESS, COMPLETED, PENDING, or CANCELLED'
        ),
    });

    const submitCreateSubject = async (values: SubjectValues, helpers: FormikHelpers<SubjectValues>) => {
        try {
            console.log('the subject values --->', values.title, values.status, values.studyMethod);
            const status = values.status?.toString() || '';
            const res = await axios.post(`/subject/register`, {...values, status});
            dispatch.subject.loadSubjectsAsync();

            setAPIResponse(res.data);
            helpers.resetForm();
        } catch (error) {
            if (error instanceof AxiosError) {
                setAPIResponse(error.response!.data);
                console.log(error!.response!.data.errors);
            }
        }
    };

    return (
        <div>
            <div className='flex mx-auto w-96'>
                {/* modal to create a subject */}
                {ApiResponse.success ? (
                    <p className='p-4 m-8 mx-auto font-bold text-center border text-md text-success rounded-xl border-success'>
                        {ApiResponse.message}
                    </p>
                ) : ApiResponse.message ? (
                    <p className='p-4 m-10 mx-auto font-bold text-center border rounded-xl border-error text-md text-error'>
                        {ApiResponse.message}
                    </p>
                ) : null}
                <div className='flex flex-col m-4 mx-auto '>
                    <h1 className='text-2xl font-bold text-center pb-2'>Create Subject</h1>
                    <Formik
                        initialValues={createSubjectValues}
                        validationSchema={createSubjectSchema}
                        onSubmit={submitCreateSubject}
                    >
                        {({ isSubmitting, errors, touched }: FormikState<SubjectValues>) => (
                            <Form>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Subject title</span>
                                        </label>
                                        <Field
                                            placeholder='Enter subject title'
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
                                            <span className='font-semibold label-text'>Study Method</span>
                                        </label>
                                        <Field
                                            placeholder='Enter study method'
                                            type='text'
                                            name='studyMethod'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.studyMethod && touched.studyMethod ? (
                                                <ErrorField error={errors.studyMethod} />
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Subject status</span>
                                        </label>
                                        <Field
                                            placeholder='Enter subject status'
                                            type='text'
                                            name='status'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
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
                                            <span className='font-semibold label-text'>Finish Date</span>
                                        </label>
                                        <Field
                                            placeholder='Pick subject finish date'
                                            type='date'
                                            name='finishDate'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.finishDate && touched.finishDate ? (
                                                <ErrorField error={errors.finishDate} />
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

export default AddSubject;
