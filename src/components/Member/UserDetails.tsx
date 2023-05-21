import React from 'react';

type Props = {};

const UserDetails = (props: Props) => {
    return (
        <div>
            <div className='text-primary-focus px-4 py-2 rounded-lg shadow-md'>
                <p className='text-lg font-semibold mb-2'>Login to see more details!</p>
                <div className='flex mb-2'>
                
                    <p className='text-xs '>
                        By logging in, you can access exclusive features, complete tasks, and personalize your
                        experience.
                    </p>
                    <button className='btn btn-sm normal-case rounded-lg btn-outline '>
                    Log In
                </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
