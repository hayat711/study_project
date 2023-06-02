import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import AddMember from './AddMember';

type Props = {};

const UserDetails = (props: Props) => {
    return (
        <div>
            <div className='text-primary-focus px-4 py-2 rounded-lg shadow-md'>
                <p className='text-lg font-semibold mb-2'>Login to see more details!</p>
                <div className='flex mb-2'>
                    <p className='text-xs '>
                        By logging in, you can access exclusive features, complete tasks, and more!
                    </p>
                    <button className='btn btn-sm normal-case rounded-lg btn-outline ml-2'>
                        <label htmlFor='add-member'>Create username</label>
                    </button>
                </div>
            </div>

            {/* <Add member /> */}
            <input type='checkbox' name='add-member' id='add-member' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <label htmlFor='add-member' className='absolute cursor-pointer right-3 top-3'>
                        <XCircleIcon className='w-10 h-10 text-accent' />
                    </label>
                    <AddMember />
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
