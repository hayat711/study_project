import { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikState, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@/store/store';
import ErrorField from '../error/ErrorField';

type MemberValues = {
    username: string | null;
};

type Props = {};

const AddMember: React.FC = (props: Props) => {
    const [ApiErrors, setAPIErrors] = useState<any>({});
    const [ApiResponse, setAPIResponse] = useState<any>('');
    const dispatch = useDispatch<Dispatch>();

    const createMemberValues: MemberValues = {
        username: '',
    };

    const createUserSchema = Yup.object().shape({
        username: Yup.string().required('username is required'),
    });

    const submitCreateUser = async (values: MemberValues, helpers: FormikHelpers<MemberValues>) => {
        console.log('Username:', values.username); // Add this logging statement
        try {
            console.log('username to get in backend in /assignment/updateWeeklyAssignment --->', values.username);
            const res = await axios.post(`/member_create`, values);
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

    return (
        <div>
            <div className='flex mx-auto w-96 overflow-y-auto scrollbar-thin'>
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
                    <h1 className='text-2xl font-bold text-center pb-2'>Create Username</h1>
                    <Formik
                        initialValues={createMemberValues}
                        validationSchema={createUserSchema}
                        onSubmit={submitCreateUser}
                    >
                        {({ isSubmitting, errors, touched }: FormikState<MemberValues>) => (
                            <Form>
                                <div>
                                    <div className='form-control'>
                                        <label htmlFor='' className='label'>
                                            <span className='font-semibold label-text'>Username </span>
                                        </label>
                                        <Field
                                            placeholder='Enter username'
                                            type='text'
                                            name='username'
                                            className={`w-full p-3 transition duration-200 rounded input-bordered input border-dotted`}
                                        />
                                        <label htmlFor='' className='label'>
                                            {errors.username && touched.username ? (
                                                <ErrorField error={errors.username} />
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

export default AddMember;
