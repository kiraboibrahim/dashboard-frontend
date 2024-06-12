import React from "react";
import { Table, Box, Typography, Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const drivers = [
  {
    id: 1,
    firstName: "Bashirah",
    lastName: "Nassanga",
    email: "bashirahnassanga@test.com",
    phoneNumber: "256704209850",
    city: "Kampala",
  },
  {
    id: 2,
    firstName: "Hamza",
    lastName: "Batte",
    email: "hamzabatte@test.com",
    phoneNumber: "256704209850",
    city: "Nakawa",
  },
  {
    id: 3,
    firstName: "Hamza",
    lastName: "Batte",
    email: "hamzabatte@test.com",
    phoneNumber: "256704209850",
    city: "Nakawa",
  },
];

export default function DriverTable() {
  return (
    <>
      <Box sx={{ marginBottom: 2 }} display="flex">
        <Typography level="h2" sx={{ marginRight: 10 }}>
          Drivers
        </Typography>
        <form style={{ display: "flex" }}>
          <Input placeholder="Search Drivers" startDecorator={<SearchIcon />} />
          <Input
            placeholder="Filter by City"
            startDecorator={<FilterAltIcon />}
            sx={{ marginLeft: 5 }}
          ></Input>
        </form>
      </Box>
      <Table
        stripe="even"
        size="md"
        stickyHeader
        sx={{ border: "1px solid", borderRadius: 10 }}
        variant="outlined"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => {
            return (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{`${driver.firstName} ${driver.lastName}`}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.email}</td>
                <td>{driver.city}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
