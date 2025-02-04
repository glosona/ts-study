import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  {
    id: 1,
    name: "Hello",
    gender: "World",
    relationship: "Friend",
    phone_num: "01012341234",
  },
];

const DataView = () => {
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "relationship", headerName: "Relationship", width: 150 },
    { field: "phone_num", headerName: "Phone Number", width: 150 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataView;
