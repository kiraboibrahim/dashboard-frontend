import React from "react";
import Product from "../Product/Product";
import { Box, Grid } from "@mui/joy";

const products = [
  {
    name: "Bathing Soap - Geisha Charcoal",
    price: 5500,
    quantity: 2,
    id: 1,
    description: "This is a sample description",
  },
  {
    name: "Washing Soap - Mukwano",
    price: 4500,
    quantity: 10,
    id: 2,
    description: "This is a sample description",
  },
  {
    name: "Samsung Galaxy A30",
    price: 455000,
    quantity: 8,
    id: 3,
    description: "This is a sample description",
  },
  {
    name: "Khaki Jeans - Black",
    price: 22000,
    quantity: 1,
    id: 4,
    description: "This is a sample description",
  },
];
export default function ProductGrid() {
  const productList = products.map((product) => (
    <Grid xs="auto">
      <Product product={product} />
    </Grid>
  ));
  return (
    <Grid container spacing={3} padding={2}>
      {productList}
    </Grid>
  );
}
