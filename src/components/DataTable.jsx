import React, { useState, useMemo, useCallback, memo } from "react";
import { ArrowUpDown } from "lucide-react";

const DataTable = memo(({ data }) => {
  const [sortField, setSortField] = useState("dateStreamed");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize sort handler
  const handleSort = useCallback(
    (field) => {
      if (field === sortField) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortField(field);
        setSortDirection("asc");
      }
    },
    [sortField, sortDirection]
  );

  // Memoize sorted and filtered data
  const filteredData = useMemo(() => {
    const sortedData = [...data].sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1;
      }
      return a[sortField] < b[sortField] ? 1 : -1;
    });

    return sortedData.filter(
      (item) =>
        item.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, sortField, sortDirection, searchTerm]);

  // Memoize table header
  const TableHeader = memo(() => (
    <tr className="border-bottom border-secondary">
      <th
        className="px-3 py-2 text-start text-uppercase text-secondary small fw-medium cursor-pointer bg-light"
        onClick={() => handleSort("songName")}
      >
        <div className="d-flex align-items-center">
          Song Name
          <ArrowUpDown
            className="ms-1 cursor-pointer"
            style={{ height: "16px", width: "16px" }}
          />
        </div>
      </th>
      <th
        className="px-3 py-2 text-start text-uppercase text-secondary small fw-medium  bg-light"
        onClick={() => handleSort("artist")}
      >
        <div className="d-flex align-items-center">
          Artist
          <ArrowUpDown
            className="ms-1 cursor-pointer"
            style={{ height: "16px", width: "16px" }}
          />
        </div>
      </th>
      <th
        className="px-3 py-2 text-start text-uppercase text-secondary small fw-medium  bg-light"
        onClick={() => handleSort("dateStreamed")}
      >
        <div className="d-flex align-items-center">
          Date Streamed
          <ArrowUpDown
            className="ms-1 cursor-pointer"
            style={{ height: "16px", width: "16px" }}
          />
        </div>
      </th>
      <th
        className="px-3 py-2 text-start text-uppercase text-secondary small fw-medium  bg-light"
        onClick={() => handleSort("streamCount")}
      >
        <div className="d-flex align-items-center">
          Stream Count
          <ArrowUpDown
            className="ms-1 cursor-pointer"
            style={{ height: "16px", width: "16px" }}
          />
        </div>
      </th>
      <th className="px-3 py-2 text-start text-uppercase text-secondary small fw-medium bg-light">
        User ID
      </th>
    </tr>
  ));

  // Memoize table row
  const TableRow = memo(({ stream }) => (
    <tr key={stream.id} className="table-hover">
      <td className="px-3 py-3 text-nowrap small fw-semibold text-dark">
        {stream.songName}
      </td>
      <td className="px-3 py-3 text-nowrap small text-secondary">
        {stream.artist}
      </td>
      <td className="px-3 py-3 text-nowrap small text-secondary">
        {new Date(stream.dateStreamed).toLocaleString()}
      </td>
      <td className="px-3 py-3 text-nowrap small text-secondary">
        {stream.streamCount.toLocaleString()}
      </td>
      <td className="px-3 py-3 text-nowrap small text-secondary">
        {stream.userId}
      </td>
    </tr>
  ));

  return (
    <div className="bg-white rounded shadow-lg p-4">
      <div className="mb-3 w-sm-100 w-md-50 w-25">
        <input
          type="text"
          placeholder="Search by song or artist..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {filteredData.map((stream) => (
              <TableRow key={stream.id} stream={stream} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

DataTable.displayName = "DataTable";
export default DataTable;
