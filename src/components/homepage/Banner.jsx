import React from 'react';


const Banner = () => {
    return (
        <div className='  justify-center items-center'>
           <h1 className='font-bold text-center text-3xl'>Friends to keep close in your life</h1>
           <p className='mt-5 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<div className='text-center'>
<button className=' mt-4 btn btn-primary items-center'> + Add a friend</button>
</div>
            
        </div>
    );
};

export default Banner;