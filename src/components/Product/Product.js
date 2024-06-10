import { AspectRatio, Card, CardContent, Typography } from "@mui/joy";
import React from "react";
import logo from "../../logo.webp";
import { formatCurrency } from "../../utils";

export default function Product({ product }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <AspectRatio>
        <img src={logo} alt={product.name} />
      </AspectRatio>
      <CardContent>
        <Typography
          level="title-sm"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {product.name}
        </Typography>
        <Typography level="h2">{formatCurrency(product.price)}</Typography>
      </CardContent>
    </Card>
  );
}
