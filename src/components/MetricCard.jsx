import React, { memo } from "react";

export const MetricCard = memo(({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded shadow-lg p-2 mx-2">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="text-muted fs-6 fw-medium">{title}</h3>
        <Icon className="fs-3 text-primary" />
      </div>
      <div className="d-flex align-items-end justify-content-between">
        <p className="fs-3 fw-bold text-dark">
          {typeof value === "number" && !title.toLowerCase().includes("revenue")
            ? value.toLocaleString()
            : value}
        </p>
        {trend !== undefined && (
          <span
            className={`fs-6 fw-medium ${
              trend >= 0 ? "text-success" : "text-danger"
            }`}
          >
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
    </div>
  );
});

MetricCard.displayName = "MetricCard";
