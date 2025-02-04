"use client";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBus, FaTruck, FaShuttleVan } from "react-icons/fa";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4512/vehicles")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Vehicles:", data); 
        setVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vehicles:", err);
        setError("Failed to load vehicles");
        setLoading(false);
      });
  }, []);

  const getVehicleIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "bus":
        return <FaBus className="text-blue-500 text-5xl" />;
      case "truck":
        return <FaTruck className="text-red-500 text-5xl" />;
      case "van":
        return <FaShuttleVan className="text-green-500 text-5xl" />;
      default:
        return <FaTruck className="text-gray-500 text-5xl" />; // Default icon
    }
  };

  if (loading) return <p className="text-center text-lg">Loading vehicles...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 fixed left-0 top-0 h-full bg-white shadow-md z-10">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <Header />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Various Vehicle Ride Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.length === 0 ? (
              <p className="text-gray-600">No vehicles found.</p>
            ) : (
              vehicles.map((vehicle) => (
                <div
                  key={vehicle._id}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="mb-4">{getVehicleIcon(vehicle.vehicleType)}</div>

                  <h2 className="text-xl font-semibold text-gray-800">
                    {vehicle.Make} {vehicle.Model}
                  </h2>
                  <p className="text-gray-600 text-lg">{vehicle.Year}</p>
                  <p className="text-sm text-gray-500">VIN: {vehicle.VIN}</p>
                  <p className="text-sm text-gray-500">Vehicle ID: {vehicle.VehicleID}</p>

                  {vehicle.CurrentLocation ? (
                    <p className="mt-2 text-gray-700 text-sm">
                      📍 {vehicle.CurrentLocation.latitude}, {vehicle.CurrentLocation.longitude}
                    </p>
                  ) : (
                    <p className="mt-2 text-gray-500 text-sm">Location unavailable</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
