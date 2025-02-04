import Link from 'next/link';
import { MdSpaceDashboard, MdOutlineGpsFixed, MdPersonPinCircle, MdAnalytics } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className=" text-black font-semibold w-64 min-h-screen p-6 shadow-md">
      <h2 className="text-2xl font-bold font-serif mb-8 text-center">Fleet Dashboard</h2>
      <ul>
        <li>
          <Link href="/" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-700 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><MdSpaceDashboard /></div> 
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/liveTracking" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><MdOutlineGpsFixed/></div>
            Live Tracking
          </Link>
        </li>
        <li>
          <Link href="/Vehicles" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><FaTruckMoving /></div>
            Vehicles
          </Link>
        </li>
        <li>
          <Link href="/drivers" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-2xl pr-2'><MdPersonPinCircle /></div>
            Drivers
          </Link>
        </li>
        <li>
          <Link href="/maintenance" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><HiMiniWrenchScrewdriver /></div>
            Maintenance
          </Link>
        </li>
        <li>
          <Link href="/analytics" className="flex py-3 px-5 rounded-lg mb-4 transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><MdAnalytics /></div>
            Analytics
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex py-3 px-5 rounded-lg mt-[100px] transition duration-300 hover:bg-Gray-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2'><IoSettings /></div>
            Settings
          </Link>
        </li>
        <li>
          <button className="flex w-full py-3 px-5 text-red-600 rounded-lg mb-4 transition duration-300 hover:bg-red-300 hover:shadow-lg hover:scale-105">
            <div className='text-xl pr-2 text-red-600'><IoMdLogOut /></div> {/* ✅ Corrected Icon */}
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
