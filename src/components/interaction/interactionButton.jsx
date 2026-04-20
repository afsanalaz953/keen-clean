"use client";


import { LuPhoneCall,} from "react-icons/lu";
import { toast } from 'react-toastify';
import { InstallFriendsContext } from "@/context/installcontext";
import { useContext} from "react";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { useTimeline } from "@/context/timelinecontext";

const InteractionButton = ({friend, type = 'Call'}) => {
  const { installedFriends, setInstalledFriends } = useContext(InstallFriendsContext );
    const { addTimelineEntry } = useTimeline(); 
    
  
  
  // Check if this friend is already installed
  const isInstalled = installedFriends.some(installed => installed.id === friend.id);
  
  console.log(installedFriends, "installed friends");
  console.log(isInstalled, "is this friend installed?");

  const handleInstallNow = () => {
  console.log('🟢 Button clicked!', { name: friend.name, type }); 
    addTimelineEntry(friend.name, type);
if (!isInstalled) {
      setInstalledFriends([...installedFriends, friend]); 
      toast.success(`${friend.name} is successfully added to your friends!`);
    } 
  };
   
const getIcon = () => {
  if (type === 'Call') {
    return <LuPhoneCall className="text-2xl" />;
  } else if (type === 'Text') {
    return <MdOutlineTextsms className="text-2xl" />;
  } else if (type === 'Video') {
    return <CiVideoOn className="text-2xl" />;
  } else {
    return <LuPhoneCall className="text-2xl" />;
  }
};


// // const InstallToggleButton = ({ app }) => {
//   const { installedApps, setInstalledApps } = useContext(InstallAppsContext);
//   console.log(installedApps, "something");

//   const handleInstallNow = () => {
//     console.log("Handle install now");
//     setInstalledApps([...installedApps, app]);
//     toast.success(`${app.title} is successfully installed!`);

//     // Logic
//   };





    return (
          <button onClick={ handleInstallNow } className='btn w-30 flex flex-col gap-2 h-15'>
       {getIcon()} 
      <span>{type}</span>
    </button>
    );
};

export default InteractionButton;
