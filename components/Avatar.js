import Link from 'next/link';
import React from 'react';

const Avatar = ( { url, className } ) => {
    
  
    return<img
        loading='lazy'
        className={`rounded-full
         w-10 h-10 
         cursor-pointer 
         transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${className}`}
        src={url}
        alt='avatar'
      
        />

   
      
      

};

export default Avatar;
