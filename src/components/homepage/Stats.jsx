import React from 'react';

const Stats = () => {
    return (
        <div className=' h-[40vh] '>
         <div className='mx-auto justify-center items-center gap-6 grid md:grid-cols-2 lg:grid-cols-4 container p-10 my-4'>
           <div className="card w-40 h-20  bg-base-100 card-xs shadow-sm">
             <div className="card-body flex flex-cols-2 justify-center items-center gap-1 pt-2">
               <h2 className="card-title text-center text-2xl"> 8 </h2>
               <p className='text-center'> Total Friends </p>
        </div>
          </div>

        <div className="card w-40 h-20  bg-base-100 card-xs shadow-sm">
             <div className="card-body flex flex-cols-2 justify-center items-center gap-1 pt-2">
               <h2 className="card-title text-center text-2xl "> 3 </h2>
               <p className='text-center'> On Track </p>
        </div>
          </div>

        <div className="card w-40 h-20  bg-base-100 card-xs shadow-sm">
             <div className="card-body flex flex-cols-2 justify-center items-center gap-1 pt-2 ">
               <h2 className="card-title text-center text-2xl"> 6 </h2>
               <p className='text-center'> Need Attention </p>
        </div>
          </div>

        <div className="card w-40 h-20 bg-base-100 card-xs shadow-sm">
             <div className="card-body flex flex-cols-2 justify-center items-center gap-1 pt-2 ">
               <h2 className="card-title text-2xl"> 12 </h2>
               <p> Interactions This Month </p>
        </div>
          </div>
         </div>
        <div className="border-t border-gray-200 p-8 text-center mt-4 flex gap-10 justify-between">
    </div>  
        </div>
    );
};

export default Stats;