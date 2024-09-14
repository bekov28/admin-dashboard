import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button } from "@mui/joy";
import { campcarUsedCar } from "../mock/mockdatausedcar";

export default function UsedCar() {
  const data = campcarUsedCar.maindata;
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
          Used Car Data List
        </Typography>
        <Button variant="solid">Add New Used Car</Button>
      </div>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th>No</th>
              <th>Used Car Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Brand</th>
              <th>People</th>
              <th>Rate</th>
              <th>Type</th>
              <th>License</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.car.name}</td>
                  <td>{value.car.date}</td>
                  <td>{value.car.location}</td>
                  <td>{value.car.company}</td>
                  <td>{value.car.people}</td>
                  <td>{value.car.rate}</td>
                  <td>{value.car.type}</td>
                  <td>{value.car.license}</td>
                  <td>{value.car.cost}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
