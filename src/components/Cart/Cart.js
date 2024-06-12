import React from "react";
import CartItem from "./CartItem";
import { Box, Button, Typography } from "@mui/joy";
import { formatCurrency } from "../../utils";
import useCart from "./useCart";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const totalCost = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Box
      maxWidth={700}
      sx={{ marginLeft: "auto", marginRight: "auto", padding: 2 }}
    >
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Cart
      </Typography>
      <Typography level="h3">{formatCurrency(totalCost)}</Typography>
      {cart.map((item) => (
        <CartItem item={item} dispatch={dispatch} key={item.id} />
      ))}
      <Button fullWidth={true} color="success">
        Checkout ({formatCurrency(totalCost)})
      </Button>
    </Box>
  );
}
