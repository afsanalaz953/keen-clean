"use client";
import { createContext, useState, useContext } from "react";

export const InstallFriendsContext = createContext();

const InstalledFriendsProvider = ({ children }) => {
  const [installedFriends, setInstalledFriends] = useState([]);

  const data = {
    installedFriends,
    setInstalledFriends,
  };

  return (
    <InstallFriendsContext.Provider value={data}>
      {children}
    </InstallFriendsContext.Provider>
  );
};

export const useInstallFriends = () => {
 const context = useContext(InstallFriendsContext);
if (!context) {
 throw new Error('useInstallFriends must be used within InstalledFriendsProvider');
}
return context;
};

export default InstalledFriendsProvider;