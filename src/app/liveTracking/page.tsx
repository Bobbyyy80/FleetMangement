

import React from "react";
import Sidebar from "../Sidebar"; 
import Header from "../Header";

const LiveTracking = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow w-full h-full flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6375300584286!2d77.39627917517833!3d23.259933984820575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4262811a3817%3A0xd89dcfeae52f9ea7!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706748793684!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            
            
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
