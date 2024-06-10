import { Box, Chip, Typography } from "@mui/joy";
import React from "react";

export default function OrderTracker() {
  const order = {
    id: 1,
    placedAt: "2024-06-10 10:05:48",
    status: "PLACED",
    products: [
      {
        quantity: 10,
        product: {
          id: 1,
          name: "Soap",
          price: 4500,
          numInStock: 10,
          description: "This is a sample description",
        },
      },
    ],
  };
  return (
    <Box padding={3}>
      <Typography level="h3">Order - #{order.id} </Typography>
      <Chip label="{order.status}"></Chip>
      <Typography level="body-sm" marginBottom={3}>
        Placed at {order.placedAt}
      </Typography>
      <Typography level="h4">Items in your Order</Typography>
    </Box>
  );
}
