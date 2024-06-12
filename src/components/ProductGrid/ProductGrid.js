import React from "react";
import Product from "./Product";
import { Box } from "@mui/joy";

const products = [
  {
    name: "Bathing Soap - Geisha Charcoal",
    price: 5500,
    id: 1,
    description: "This is a sample description",
  },
  {
    name: "Washing Soap - Mukwano",
    price: 4500,
    id: 2,
    description: "This is a sample description",
  },
  {
    name: "Samsung Galaxy A30",
    price: 455000,
    id: 3,
    description: "This is a sample description",
  },
  {
    name: "Khaki Jeans - Black",
    price: 22000,
    id: 4,
    description: "This is a sample description",
  },
];
export default function ProductGrid() {
  const productList = products.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <Box
      padding={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 2,
      }}
    >
      {productList}
    </Box>
  );
}
