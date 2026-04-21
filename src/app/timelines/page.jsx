"use client";
import Link from "next/link";
import React, { useContext } from "react";
// import { InstallFriendsContext } from "@/context/installcontext";
import { toast } from "react-toastify";
import { useTimeline } from "@/context/timelinecontext"; // ADD THIS IMPORT
import { LuPhoneCall } from "react-icons/lu"; // ADD THIS
import { MdOutlineTextsms } from "react-icons/md"; // ADD THIS
import { CiVideoOn } from "react-icons/ci"; // ADD THIS



const TimelinePage = () => {
  
  const { timelineEntries, loading } = useTimeline();

  const getIcon = (type) => {
    switch(type) {
      case 'Call':
        return <LuPhoneCall className="text-2xl text-blue-500" />;
      case 'Text':
        return <MdOutlineTextsms className="text-2xl text-green-500" />;
      case 'Video':
        return <CiVideoOn className="text-2xl text-purple-500" />;
      default:
        return <LuPhoneCall className="text-2xl" />;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-3xl">
        <div className="text-center py-10">
          <p>Loading timeline...</p>
        </div>
      </div>
    );
  }


  

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="mb-6">
        {/* <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Friends
        </Link> */}
        <h1 className="text-3xl font-bold mt-4">Timeline</h1>

        <div className="dropdown dropdown-start mt-2">
  <div tabIndex={0} role="button" className="btn  w-50">Filter Timeline ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Call</a></li>
    <li><a>Text</a></li>
    <li><a>Video</a></li>
  </ul>
</div>

      </div>

      <div className="container mx-auto my-10">
        {timelineEntries.length === 0 ? (
          <h2 className="font-bold text-4xl text-center my-5">
            No installed apps found!
          </h2>
        ) : (
          timelineEntries.map((entry) => {
            
            return (
              <div
                key={entry.id} 
                className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
              >
                <div className="flex gap-4 items-start flex-1">
                  <div className="mt-1">
                    {getIcon(entry.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-semibold text-xl">
                        {entry.title}
                      </h2>
                      {/* <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(entry.type)}`}>
                        {entry.type}
                      </span> */}
                    </div>
                    <p className="text-gray-600 text-sm">
                      with {entry.friendName}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      {entry.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
  };  

export default TimelinePage;
 