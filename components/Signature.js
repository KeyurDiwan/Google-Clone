import React from 'react';
import {HeartIcon} from '@heroicons/react/solid'

function Signature() {
    return <div className=' btn'>
            <div className='flex  mt-2 '>
        <h1 className='text-gray-900'> Design and Developed By Keyur</h1> <HeartIcon
                className='text-red-500 h-7 mx-2' />
            </div>
            <div className='items-center'>
        <p className='text-gray-900 text-sm'>
                Copyrights 2022 &copy; Keyur Diwan</p>
           </div>
  </div>;
}

export default Signature;
