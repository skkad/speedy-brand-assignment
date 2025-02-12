import React, { Suspense, lazy, useMemo } from "react";
import {
  Users,
  Music,
  DollarSign,
  Trophy,
  LayoutDashboard,
} from "lucide-react";

import { MetricCard } from "./components/MetricCard";

import {
  keyMetrics,
  monthlyGrowthData,
  revenueDistribution,
  topSongs,
  recentStreams,
} from "./data/mockData";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load heavy components
const Charts = lazy(() => import("./components/Charts"));
const DataTable = lazy(() => import("./components/DataTable"));

// Loading fallback components

const ChartsSkeleton = () => (
  <div className="container-fluid">
    <div className="row g-3">
      <div className="col-lg-6">
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="skeleton-loader" style={{ height: "300px" }}></div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="skeleton-loader" style={{ height: "300px" }}></div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="skeleton-loader" style={{ height: "300px" }}></div>
        </div>
      </div>
    </div>
  </div>
);

const TableSkeleton = () => (
  <div className="bg-white rounded shadow-lg p-4">
    <div className="skeleton-loader mb-3" style={{ height: "40px" }}></div>
    <div className="d-flex flex-column gap-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="skeleton-loader"
          style={{ height: "32px" }}
        ></div>
      ))}
    </div>
  </div>
);

function App() {
  const memoizedMetrics = useMemo(
    () => ({
      totalUsers: {
        title: "Total Users",
        value: keyMetrics.totalUsers,
        icon: Users,
        trend: 2.5,
      },
      activeUsers: {
        title: "Active Users",
        value: keyMetrics.activeUsers,
        icon: Users,
        trend: 1.8,
      },
      totalStreams: {
        title: "Total Streams",
        value: keyMetrics.totalStreams,
        icon: Music,
        trend: 3.2,
      },
      revenue: {
        title: "Revenue",
        value: `$${keyMetrics.revenue.toLocaleString()}`,
        icon: DollarSign,
        trend: 4.5,
      },
      topArtist: {
        title: "Top Artist",
        value: keyMetrics.topArtist,
        icon: Trophy,
      },
    }),
    []
  );
  return (
    <div className="vh-100 bg-light d-flex flex-column">
      {/* <h1 className="text-primary">Welcome to React with Bootstrap!</h1>
      <button className="btn btn-success mt-3">Click Me</button> */}
      {/* Header */}
      <header className="bg-white shadow-sm fixed-top w-100 h-60 p-3">
        <div className="container-fluid py-0">
          <div className="d-flex align-items-center gap-3">
            <LayoutDashboard className="fs-3 text-primary" />
            <div>
              <h1 className="h4 fw-bold text-dark">Streamify Analytics</h1>
              <p className="small text-muted">
                Real-time insights into your music streaming platform
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main
        className="container-fluid px-4 py-4 overflow-auto"
        style={{ marginTop: "105px", height: "calc(100vh - 105px)" }}
      >
        {/* Key Metrics */}
        {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 mb-4"> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 mb-4 mt-8">
          {Object.values(memoizedMetrics).map((metric) => (
            <div className="col">
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                trend={metric.trend}
              />
            </div>
          ))}
        </div>
        {/* Charts */}
        <div className="mb-8">
          <Suspense fallback={<ChartsSkeleton />}>
            <Charts
              monthlyData={monthlyGrowthData}
              revenueData={revenueDistribution}
              topSongs={topSongs}
            />
          </Suspense>
        </div>
        {/* Data Table */}
        <div className="mt-4 mb-2 px-2">
          <h2 className="fs-4 fw-semibold mb-3">Recent Streams</h2>
          <Suspense fallback={<TableSkeleton />}>
            <DataTable data={recentStreams} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
