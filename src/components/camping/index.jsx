import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button } from "@mui/joy";
import { campcarCampingPlace } from "../mock/mockdatacamping";

export default function Camping() {
  const data = campcarCampingPlace.maindata;
  return (
    <div style={{ padding: "2%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          Camping Place Data List
        </Typography>
        <Button variant="solid">Add New Camping Place</Button>
      </div>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th>No</th>
              <th>Camping Place Name</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Brand</th>
              <th>People</th>
              <th>Type</th>
              <th>License</th>
              <th>Cost</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.camping.name}</td>
                  <td>{value.camping.phone}</td>
                  <td>{value.camping.location}</td>
                  <td>{value.camping.company}</td>
                  <td>{value.camping.people}</td>
                  <td>{value.camping.type}</td>
                  <td>{value.camping.license}</td>
                  <td>{value.camping.cost}</td>
                  <td>{value.camping.site}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
