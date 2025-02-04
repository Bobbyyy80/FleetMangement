"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FaTruck, FaBus, FaShuttleVan, FaRoute } from "react-icons/fa";


export default function Dashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4512/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error("Error fetching vehicles:", err));
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        

        {/* Dashboard Overview */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Fleet Overview</h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              icon={<FaTruck className="text-white text-4xl" />}
              title="Total Trucks"
              value="120"
              color="bg-blue-500"
            />
            <DashboardCard
              icon={<FaBus className="text-white text-4xl" />}
              title="Total Buses"
              value="45"
              color="bg-green-500"
            />
            <DashboardCard
              icon={<FaShuttleVan className="text-white text-4xl" />}
              title="Total Vans"
              value="78"
              color="bg-yellow-500"
            />
            <DashboardCard
              icon={<FaRoute className="text-white text-4xl" />}
              title="Active Routes"
              value="30"
              color="bg-purple-500"
            />
          </div>

          {/* Recent Vehicles Table */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Vehicles</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Vehicle ID</th>
                    <th className="py-2 px-4 border-b text-left">Type</th>
                    <th className="py-2 px-4 border-b text-left">Make</th>
                    <th className="py-2 px-4 border-b text-left">Model</th>
                    <th className="py-2 px-4 border-b text-left">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.slice(0, 5).map((vehicle) => (
                    <tr key={vehicle._id} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">{vehicle.VehicleID}</td>
                      <td className="py-2 px-4">{vehicle.vehicleType}</td>
                      <td className="py-2 px-4">{vehicle.Make}</td>
                      <td className="py-2 px-4">{vehicle.Model}</td>
                      <td className="py-2 px-4">{vehicle.Year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>


      
    </div>
  );
}

// Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, value, color }) => {
  return (
    <div className={`p-5 rounded-lg shadow-md flex items-center ${color} text-white`}>
      <div className="p-3 rounded-full bg-white bg-opacity-20">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      
      
      </div>
      
    </div>

    
  );
};
