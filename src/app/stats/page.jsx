
"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { useTimeline } from "@/context/timelinecontext";
import { InstallFriendsContext } from "@/context/installcontext";

const StatPage = () => {
//   const { installedFriends } = useContext(InstallFriendsContext);
  const { friends, loading } = useTimeline();
  
//   console.log(friends, "all friends");
//   console.log(installedFriends, "installed friends");
  
//   const uninstalledFriendsLength = friends.length - installedFriends.length;
//   console.log(uninstalledFriendsLength, "uninstalled friends");
//   console.log(installedFriends.length, "installed friends");

  // Get interaction statistics from timeline
  const { timelineEntries } = useTimeline();
  
  // Count interactions by type
  const callCount = timelineEntries.filter(entry => entry.type === 'Call').length;
  const textCount = timelineEntries.filter(entry => entry.type === 'Text').length;
  const videoCount = timelineEntries.filter(entry => entry.type === 'Video').length;
  const totalInteractions = timelineEntries.length;



  // Data for interaction pie chart
  const interactionData = [
    { name: "Calls", value: callCount, fill: "#3b82f6" },
    { name: "Texts", value: textCount, fill: "#22c55e" },
    { name: "Videos", value: videoCount, fill: "#a855f7" },
  ];

 if (loading) {
        return (
      <div className="shadow p-10 rounded-md border border-slate-300">
        <div>
          <h1>Friendship Analytics</h1>
        </div>
        <div className="text-center">
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="shadow  bg-gray-200 p-10 rounded-md border border-slate-300">
        <div>
            <h1 className="font-bold text-3xl">
                Friendship Analytics
            </h1>
        </div>
      
      <div className="text-center m-6 p-10 shadow-sm bg-white">
        <h2 className="font-semibold mb-4 text-left m-4">
        By Interaction Type
      </h2>
        {/* <p className="text-lg">
          Total Interactions: <span className="font-bold">{totalInteractions}</span>
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <p className="text-sm">
            📞 Calls: <span className="font-bold text-blue-500">{callCount}</span>
          </p>
          <p className="text-sm">
            💬 Texts: <span className="font-bold text-green-500">{textCount}</span>
          </p>
          <p className="text-sm">
            📹 Videos: <span className="font-bold text-purple-500">{videoCount}</span>
          </p> */}
        
     

      {totalInteractions > 0 ? (
        <PieChart
          style={{
            width: "80%",
            maxWidth: "300px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
        >
          <Pie
            data={interactionData}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
           
          />
          <Legend />
          <Tooltip />
        </PieChart>
      ) : (
        <p className="text-center text-gray-500">
          No interactions yet. Click on Call, Text, or Video buttons to see statistics!
        </p>
      )}
      </div>
    </div>
   
  );
};


export default StatPage;
