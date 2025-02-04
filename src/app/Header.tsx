import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import profile from "../app/Profile.jpg"

export default function Header() {
  return (
    <div className="flex items-center justify-between shadow-md px-6 py-4">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 ml-[300px] rounded-full w-[350px] shadow-md border">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search vehicles, drivers..."
          className="bg-transparent outline-none px-3 w-full text-gray-700"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Notification Button */}
        <button className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm">
          <IoMdNotificationsOutline className="text-2xl text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <Image
            src={profile}
            alt="Bob"
            width={45}
            height={45}
            className="rounded-full border-2 border-gray-300 shadow-sm"
          />
          <div>
            <p className="text-gray-800 font-semibold text-md">Bobby</p>
            <p className="text-sm text-gray-500">Fleet Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
