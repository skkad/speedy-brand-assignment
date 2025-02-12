import React, { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#f97316"];

const Charts = memo(({ monthlyData, revenueData, topSongs }) => {
  // Memoize chart components for better performance
  const UserGrowthChart = memo(() => (
    <div className="bg-white p-4 rounded shadow-lg">
      <h3 className="fs-5 fw-semibold mb-3">User Growth</h3>
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("default", {
                  month: "short",
                })
              }
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#6366f1"
              name="Total Users"
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#8b5cf6"
              name="Active Users"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  ));

  const RevenueChart = memo(() => (
    <div className="bg-white p-4 rounded shadow-lg">
      <h3 className="fs-5 fw-semibold mb-3">Revenue Distribution</h3>
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={revenueData}
              dataKey="amount"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {revenueData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  ));

  const TopSongsChart = memo(() => (
    <div className="bg-white p-4 rounded shadow-lg ">
      <h3 className="fs-5 fw-semibold mb-3">Top 5 Streamed Songs</h3>
      <div style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topSongs}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="songName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="streams"
              fill="#6366f1"
              name="Streams"
              label={{ position: "top" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  ));

  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //   <UserGrowthChart />
    //   <RevenueChart />
    //   <TopSongsChart />
    // </div>
    <div className="container-fluid">
      <div className="row g-3">
        <div className="col-lg-6">
          <RevenueChart />
        </div>
        <div className="col-lg-6">
          <TopSongsChart />
        </div>
        <div className="col-lg-12">
          <UserGrowthChart />
        </div>
      </div>
    </div>
  );
});

Charts.displayName = "Charts";
export default Charts;
