import React from 'react';
import Cards from "@/components/ui/Cards";



const freindsPromise = async function () {
  const res = await fetch("http://localhost:3000/freinds.json");
  const freinds = await res.json();
  return freinds;
};
const Allfreinds = async ({ from }) => {
  const freinds = await freindsPromise();
  console.log(freinds, "freinds");




 


   
    return (
      <div className=''>
        <h2 className='my-10 text-center text-2xl font-bold'>Your Friends</h2>
        <div className="grid grid-cols-4 gap-5">
         {freinds
          // .slice(0, from === "homepage" ? 9 : freinds.length - 1)
          .map((freind, ind) => {
            return <Cards freind={freind} key={ind} />;
          })} 
      </div>
     </div>
    );
};


export default Allfreinds;