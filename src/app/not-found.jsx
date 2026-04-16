import React from 'react';
import Link from "next/link"

const NotFound = () => {
    return (
        <div className=' flex-col justify-center items-center not-only:m-50  '>
         <h2 className=' border-2  bg-purple-300 text-2xl font-bold text-center'> Page Not Found  </h2>
          <button className="btn btn-primary">Back to Home</button>
        </div>
    );
};

export default NotFound;