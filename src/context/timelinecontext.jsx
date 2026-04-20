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

  
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/freinds.json');
        const data = await response.json();
        console.log(data)
        setFriends(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading friends:', error);
        setLoading(false);
      }
    };
    
    fetchFriends();
  }, []);



  const addTimelineEntry = (friendName, type) => {
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
    
    setTimelineEntries(prev => [newEntry, ...prev]);
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