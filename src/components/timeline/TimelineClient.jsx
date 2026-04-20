// "use client";

// import React, { useState, useEffect } from 'react';
// import { LuPhoneCall } from "react-icons/lu";
// import { MdOutlineTextsms } from "react-icons/md";
// import { CiVideoOn } from "react-icons/ci";
// import { useTimeline } from '@/context/timelinecontext';

// const TimelineClient = () => {
//   const { getAllEntries } = useTimeline();
//   const [mounted, setMounted] = useState(false);
//   const entries = getAllEntries();
  
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const getIcon = (type) => {
//     switch(type) {
//       case 'Call': 
//         return <LuPhoneCall className="text-blue-500 text-2xl" />;
//       case 'Text': 
//         return <MdOutlineTextsms className="text-green-500 text-2xl" />;
//       case 'Video': 
//         return <CiVideoOn className="text-purple-500 text-2xl" />;
//       default: 
//         return null;
//     }
//   };
  
//   const debugEntries = () => {
//     console.log('All entries:', entries);
//     alert(`Total entries: ${entries.length}\nCheck console for details`);
//   };

//   // Don't render until mounted on client to avoid hydration mismatch
//   if (!mounted) {
//     return (
//       <>
//         <button className="mb-4 bg-gray-500 text-white px-3 py-1 rounded opacity-50" disabled>
//           Loading...
//         </button>
//         <div className="space-y-3">
//           <div className="bg-white rounded-xl p-4 shadow-sm border animate-pulse">
//             <div className="h-6 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <button 
//         onClick={debugEntries}
//         className="mb-4 bg-gray-500 text-white px-3 py-1 rounded"
//       >
//         Debug: Show {entries.length} Entries
//       </button>

//       {entries.length === 0 ? (
//         <div className="text-center py-10 text-gray-400">
//           No interactions yet. Go to page and log a call, text, or video.
//         </div>
//       ) : (
//         <div className="space-y-3">
//           {entries.map((entry) => (
//             <div key={entry.id} className="bg-white rounded-xl p-4 shadow-sm border flex items-center gap-4">
//               <div>{getIcon(entry.type)}</div>
//               <div className="flex-1">
//                 <h3 className="font-semibold">{entry.title}</h3>
//                 <p className="text-sm text-gray-500">📅 {entry.date}</p>
//               </div>
//               <span className={`text-xs px-2 py-1 rounded-full ${
//                 entry.type === 'Call' ? 'bg-blue-100 text-blue-700' :
//                 entry.type === 'Text' ? 'bg-green-100 text-green-700' :
//                 'bg-purple-100 text-purple-700'
//               }`}>
//                 {entry.type}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default TimelineClient;

"use client";
import { createContext, useState, useContext, useEffect } from "react";

const TimelineContext = createContext();

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within TimelineProvider');
  }
  return context;
};

const TimelineProvider = ({ children }) => {
  const [timelineEntries, setTimelineEntries] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("timelineEntries");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch friends data
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/freinds.json');
        const data = await response.json();
        console.log('Friends loaded:', data);
        setFriends(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading friends:', error);
        setLoading(false);
      }
    };
    
    fetchFriends();
  }, []);

  // ✅ ADD THIS BACK - Save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("timelineEntries", JSON.stringify(timelineEntries));
      console.log('Saved to localStorage:', timelineEntries.length, 'entries');
    }
  }, [timelineEntries]);

  const addTimelineEntry = (friendName, type) => {
    console.log('🔥 Adding entry:', { friendName, type });
    
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      type: type,
      title: `${type} with ${friendName}`,
      friendName: friendName,
      timestamp: new Date().toISOString()
    };
    
    setTimelineEntries(prev => {
      console.log('Previous entries count:', prev.length);
      const updated = [newEntry, ...prev];
      console.log('Updated entries count:', updated.length);
      return updated;
    });
    
    return newEntry;
  };

  const getAllEntries = () => timelineEntries;
  const getAllFriends = () => friends;

  return (
    <TimelineContext.Provider value={{ 
      timelineEntries, 
      addTimelineEntry, 
      getAllEntries,
      friends,
      getAllFriends,
      loading 
    }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;