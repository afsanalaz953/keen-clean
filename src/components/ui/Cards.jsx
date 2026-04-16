import React from 'react';
import Link from "next/link"
import Image from "next/image"

const Cards = ({freind}) => {
  const getStatusStyle = (status) => {
    if (status === 'overdue') {
        return 'bg-red-300 text-white';
    } else if (status === 'almost due') {
        return 'bg-red-800 text-white';
    } else if (status === 'on-track') {
        return 'bg-green-400 text-white';
    } else {
        return 'btn';
    }
};
    return (
         <Link href={`/freinds/${freind.id}`} className="card bg-base-100 shadow-sm">
     
      <div className="card-body ">
        <figure>
            <Image src={freind.image} className='`w-auto` h-20 text-center' alt="Friend" width={80} height={80} />
        </figure>
       
        <h2 className="card-title text-center mx-6">{freind.name}</h2>
        <p className='text-center'>{freind.days_since_contact}</p>
        <div className="flex gap-2 justify-center mx-6">
          {freind.tags && freind.tags.map((tag, index) => (
            <button key={index} className="bg-green-200 btn btn-sm rounded-full">
              {tag}
            </button>
          ))}
        </div>
        <button className={`btn ${getStatusStyle(freind.status)} w-30 rounded-full mx-6`}> {freind.status}</button>

      </div>
    </Link>
    );
};

export default Cards;