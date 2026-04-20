import React from 'react';
import Cards from "@/components/ui/Cards";





const freindsPromise = async function () {
 
  const res = await fetch("https://keep-keeper.vercel.app/freinds.json",{
    cache:"no-store"
});
  const freinds = await res.json();
  return freinds;
};
const Allfreinds = async ({ from }) => {
  const freinds = await freindsPromise();
  console.log(freinds, "freinds");

 
    return (
      <div className=''>
        <h2 className='my-10 text-center text-2xl font-bold'>Your Friends</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
         {freinds
          .map((freind, ind) => {
            return <Cards freind={freind} key={ind} />;
          })} 
      </div>
     </div>
    );
};


export default Allfreinds;