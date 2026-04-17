import React from 'react';
import { toast } from 'react-toastify';  
import Link from "next/link";
import { LuPhoneCall,} from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import Image from "next/image"
// import Freindcards from '@/hooks/Freindcards';


const freindsPromise = async function () {
  const res = await fetch("http://localhost:3000/freinds.json");
  const data = await res.json();
  return data;
};

const getStatusClass = (status) => {
  switch(status) {
    case 'close friend': return 'status-close';
    case 'good friend': return 'status-good';
    default: return 'status-default';
  }
};

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

 
const FreindDetailsPage = async ({ params }) => {
  const freinds = await freindsPromise();
 const { id } = await params;
 console.log(id, "params")
  
 const friend = freinds.find(f => f.id === parseInt(id));
if (!friend) 
  {
   return (
       <div className="text-center p-10 ">
        <h2>Friend not found with ID: {id}</h2>
      <Link href="/">Back to home</Link>
    </div>
 );
 }

  // card section

  const addInteraction = (type) => {
    toast.success(`📝 Logged ${type} with ${friend.name}!`);
  };


return (
  <>
 <div className='layout grid grid-cols-2 gap-4 p-20 container m-auto'>
   <div className='left space-y-4'>
    <div className='leftcard1'>
 {/* Left Column - Friend Info Card */}
        <div className="left-info-card border-0  bg-white rounded-3xl space-y-4 text-center">
          <Image src={friend.image} className='`w-20` h-20 mx-auto  text-center' alt="Friend" width={80} height={80} />
       
        <h1 className="info-name font-bold text-2xl">{friend.name}</h1>
        <button className={`status-badge ${getStatusClass, getStatusStyle (friend.status)} w-30 rounded-full mx-6`} >{friend.status}</button>

         <div className="">
          {friend.tags && friend.tags.map((tag, index) => (
            <button key={index} className="bg-green-200 btn btn-sm rounded-full">
              {tag}
            </button>
          ))}
        </div>
          <p className="info-bio">{friend.bio}</p>
          <p className="info-email"> {friend.email}</p>  
        </div> 


{/* leftcard1 end */}
    </div>

    {/* extra 3leftcard */}
    <div className='left2 border-0 flex flex-row gap-2 justify-center items-center bg-white w-135 p-6 rounded-3xl text-center'>
     <RiNotificationSnoozeLine />
 <span>Snooze 2 weeks</span>
      
      </div>
    <div className='left3 flex flex-row gap-2 justify-center items-center border-0 bg-white w-135 p-6 rounded-3xl'>
      <LuArchive />
 <span>Archive</span>

    </div>
    <div className='left4 flex flex-row gap-2 justify-center items-center border-0 bg-white w-135 p-6 rounded-3xl '>
      <RiDeleteBin5Line className='text-red-600'/>
 <span>Delete</span>
     
     </div>
    {/* left end */}
   </div>








   <div className='right grid  grid-rows-3 gap-6 shadow-sm'>
{/* right start */}
 <div className="stats-cards grid grid-cols-3 gap-4 ">
            <div className="stat-card-1 border-0 rounded-2xl text-center p-4 bg-white ">
              <h2 className="stat-value text-sm">{friend.days_since_contact}</h2>
              <h2 className="stat-label">Days Since Contact</h2>
              
            </div>
            <div className="stat-card-2 border-0 rounded-2xl bg-white p-4">
              <div className="stat-value text-sm">{friend.goal}</div>
              <div className="stat-label">Goal (days)</div>
            </div>
            <div className="stat-card-3 border-0 rounded-2xl  bg-white p-4">
              <div className="stat-value text-sm" style={{ fontSize: '0.9rem' }}>{friend.next_due_date}</div>
              <div className="stat-label">Next Due Date</div>
            </div>
          </div>
          {/* stat Goal Card end*/}

          {/* Relationship Goal Card */}
          <div className="goal-card border-0 rounded-2xl gap-15 bg-white justify-around items-center grid grid-cols-2">
            <div className='text-center'>
              <strong>Relationship Goal</strong>
            <p style={{ marginTop: '0.25rem', fontSize: '0.9rem', color: '#4a5568' }}>
              Contact every {friend.goal} days
            </p>
            </div>
            <button className='btn w-20'>Edit</button>
            
          </div>
          {/* Relationship Goal Card end */}

          {/* Quick Check-in Card with 3 Buttons */}
            <div className="checkin-card  border-0 rounded-2xl  bg-white">
            <strong className='m-4'> Quick Check-in</strong>
           <div className='grid grid-cols-3 gap-2 m-5 justify-center items-center'>
            <button className='btn w-30 flex flex-col gap-2 h-15'>
              <LuPhoneCall />
              <span>Call</span>
              </button>
            <button className='btn w-30 flex flex-col gap-2 h-15'>
             <MdOutlineTextsms />
              <span>Text</span>
            </button>
            <button className='btn w-30 flex flex-col gap-2 h-15 '>
               <CiVideoOn />
              <span>Video</span>
            </button>
            </div>  
      </div>
      {/* chickencard finish */}
      






    {/* right end */}
   </div>








{/* layout end div */}
 </div>

  </>
    );  
   }; 

export default FreindDetailsPage;