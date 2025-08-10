import React, { use } from "react";
import { FaUsers, FaShoppingCart, FaDollarSign, FaTasks } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    id: 1,
    title: "Users",
    value: "1,245",
    icon: <FaUsers className="text-blue-500 w-7 h-7" />,
    bgColor: "bg-blue-100",
    darkBg: "bg-blue-900",
  },
  {
    id: 2,
    title: "Sales",
    value: "3,456",
    icon: <FaShoppingCart className="text-green-500 w-7 h-7" />,
    bgColor: "bg-green-100",
    darkBg: "bg-green-900",
  },
  {
    id: 3,
    title: "Revenue",
    value: "$78,123",
    icon: <FaDollarSign className="text-yellow-500 w-7 h-7" />,
    bgColor: "bg-yellow-100",
    darkBg: "bg-yellow-900",
  },
  {
    id: 4,
    title: "Subscribers",
    value: "87%",
    icon: <FaTasks className="text-purple-500 w-7 h-7" />,
    bgColor: "bg-purple-100",
    darkBg: "bg-purple-900",
  },
];

const recentActivities = [
  { id: 1, activity: "New user registered: John Doe", time: "2 hours ago" },
  { id: 2, activity: "Order #2345 completed", time: "4 hours ago" },
  { id: 3, activity: "Server restarted", time: "6 hours ago" },
  { id: 4, activity: "New comment on post", time: "1 day ago" },
];

// Chart Data
const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 15000, 11000, 18000, 20000, 25000, 22000],
      fill: true,
      backgroundColor: "rgba(99, 102, 241, 0.2)", // Indigo-500 with opacity
      borderColor: "rgb(99, 102, 241)",
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#9CA3AF", // default gray-400 for dark mode
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#9CA3AF" },
      grid: { color: "rgba(156, 163, 175, 0.2)" },
    },
    y: {
      ticks: { color: "#9CA3AF" },
      grid: { color: "rgba(156, 163, 175, 0.2)" },
    },
  },
};

const DashBoardHome = () => {
  const { user, theme } = use(AuthContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen p-8 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Greeting */}
      <div className="mb-8">
        <h1
          className={`text-4xl font-extrabold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome back,{" "}
          <span className="text-indigo-500">{user.displayName}</span>
        </h1>
        <p className={isDark ? "text-gray-300" : "text-gray-700"}>
          Here's what's happening with your data today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map(({ id, title, value, icon, bgColor, darkBg }) => (
          <div
            key={id}
            className={`flex items-center space-x-4 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${
              isDark ? darkBg : bgColor
            }`}
          >
            <div className="p-3 bg-white rounded-full">{icon}</div>
            <div>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {title}
              </p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Recent Activities Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div
          className={`lg:col-span-2 rounded-xl shadow-lg p-6 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
          <Line
            data={chartData}
            options={{
              ...chartOptions,
              plugins: {
                legend: {
                  labels: {
                    color: isDark ? "#D1D5DB" : "#4B5563",
                  },
                },
              },
              scales: {
                x: {
                  ticks: { color: isDark ? "#D1D5DB" : "#4B5563" },
                  grid: {
                    color: isDark
                      ? "rgba(209, 213, 219, 0.1)"
                      : "rgba(156, 163, 175, 0.2)",
                  },
                },
                y: {
                  ticks: { color: isDark ? "#D1D5DB" : "#4B5563" },
                  grid: {
                    color: isDark
                      ? "rgba(209, 213, 219, 0.1)"
                      : "rgba(156, 163, 175, 0.2)",
                  },
                },
              },
            }}
          />
        </div>

        {/* Recent Activity */}
        <div
          className={`rounded-xl shadow-lg p-6 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4 max-h-56 overflow-y-auto">
            {recentActivities.map(({ id, activity, time }) => (
              <li
                key={id}
                className={`pb-2 border-b ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <p className="text-gray-300">{activity}</p>
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
