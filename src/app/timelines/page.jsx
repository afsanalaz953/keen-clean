"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { InstallFriendsContext } from "@/context/installcontext";
import { toast } from "react-toastify";

const InstallFriends = () => {
  const { installedFriends, setInstalledFriends } = useContext(InstallFriendsContext);
  // console.log(installedFriends, "contextData");

  const handleUninstall = (friend) => {
    // console.log(Friend, "need to uninstall");

    const restFriends = installedFriends.filter((ifriend) => ifriend.id != friend.id);
    // console.log(restFriends, "restFriends");

    setInstalledFriends(restFriends);
    toast.warning(`${friend.name} is uninstalled!`);
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to Friends
        </Link>
        <h1 className="text-3xl font-bold mt-4">Timelines</h1>
      </div>

      <div className="container mx-auto my-10">
        {installedFriends.length === 0 ? (
          <h2 className="font-bold text-4xl text-center my-5">
            No installed apps found!
          </h2>
        ) : (
          installedFriends.map((friend, ind) => {
            return (
              <div
                key={ind}
                className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
              >
                <div>
                  <h2 className="font-semibold text-2xl">{friend.name}</h2>
                </div>
                <button
                  className="btn bg-secondary text-white"
                  onClick={() => handleUninstall(friend)}
                >
                  Uninstall
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InstallFriends;
 