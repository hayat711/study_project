import React from 'react';

type Props = {
    error: string | null | any;
};

const ErrorField = ({ error }: Props) => {
    return <span className='italic font-bold label-text-alt text-error'>{error}</span>;
};

export default ErrorField;
