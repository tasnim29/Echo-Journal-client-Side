import React, { use } from "react";
import { FaUsers, FaShoppingCart, FaDollarSign, FaTasks } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const stats = [
  {
    id: 1,
    title: "Users",
    value: "1,245",
    icon: <FaUsers className="text-blue-500 w-7 h-7" />,
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Sales",
    value: "3,456",
    icon: <FaShoppingCart className="text-green-500 w-7 h-7" />,
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Revenue",
    value: "$78,123",
    icon: <FaDollarSign className="text-yellow-500 w-7 h-7" />,
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Tasks",
    value: "87%",
    icon: <FaTasks className="text-purple-500 w-7 h-7" />,
    bgColor: "bg-purple-100",
  },
];

const recentActivities = [
  { id: 1, activity: "New user registered: John Doe", time: "2 hours ago" },
  { id: 2, activity: "Order #2345 completed", time: "4 hours ago" },
  { id: 3, activity: "Server restarted", time: "6 hours ago" },
  { id: 4, activity: "New comment on post", time: "1 day ago" },
];

const DashBoardHome = () => {
  const { user } = use(AuthContext);
  return (
    <div className="min-h-screen  p-8">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Welcome back,{" "}
          <span className="text-indigo-600">{user.displayName}</span>
        </h1>
        <p className="text-gray-700">
          Here's what's happening with your data today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map(({ id, title, value, icon, bgColor }) => (
          <div
            key={id}
            className={`flex items-center space-x-4 p-6 rounded-xl shadow-lg ${bgColor} hover:shadow-xl transition-shadow cursor-pointer`}
          >
            <div className="p-3 bg-white rounded-full">{icon}</div>
            <div>
              <p className="text-gray-700 font-semibold">{title}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Recent Activities Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
          <div className="h-56 flex items-center justify-center text-gray-400 italic">
            {/* You can replace this div with a chart component like Recharts, Chart.js, etc. */}
            [Chart Placeholder]
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4 max-h-56 overflow-y-auto">
            {recentActivities.map(({ id, activity, time }) => (
              <li key={id} className="border-b border-gray-200 pb-2">
                <p className="text-gray-800">{activity}</p>
                <p className="text-gray-500 text-sm">{time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
