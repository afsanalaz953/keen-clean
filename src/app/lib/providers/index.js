"use client";
import React from 'react';
import InstallFriendsProvider from "@/context/installcontext"; 
import TimelineProvider from "@/context/timelinecontext"; 


const Provider = ({ children}) => {
    return (
        <InstallFriendsProvider>
          <TimelineProvider> 
      {children}
      </TimelineProvider> 
      </InstallFriendsProvider>
      
    );
};

export default Provider;