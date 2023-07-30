import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='grid place-items-center min-h-screen'>
            <div>
                <h1> not found</h1>
                <Link href={'/'}>home</Link>
            </div>
        </div>
    );
};

export default NotFound;