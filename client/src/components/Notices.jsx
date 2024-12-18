import { useState } from "react";

const Notices = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "Library Timing Changed",
      description: "New timings are 9:00 AM - 8:00 PM.",
    },
    {
      id: 2,
      title: "Monthly Fees Due",
      description: "Please pay the fees before the 25th of this month.",
    },
    {
      id: 3,
      title: "Seat Maintenance",
      description: "Seats will undergo maintenance on Sunday.",
    },
  ]);

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Notices</h2>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-6 bg-white shadow-md rounded-lg border hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {notice.title}
            </h3>
            <p className="text-gray-600 mt-2">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
