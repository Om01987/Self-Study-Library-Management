import { useEffect, useState } from "react";

const Dashboard = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Simulate fetching status data (this would be fetched from backend)
    setStatus({
      bookingStatus: "Confirmed",
      paymentStatus: "Paid",
      paymentDueDate: "2024-12-31",
    });
  }, []);

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-700">
            Booking Status
          </h3>
          <p className="text-lg">
            {status ? status.bookingStatus : "Loading..."}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-700">
            Payment Status
          </h3>
          <p className="text-lg">
            {status ? status.paymentStatus : "Loading..."}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-700">
            Payment Due Date
          </h3>
          <p className="text-lg">
            {status ? status.paymentDueDate : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
