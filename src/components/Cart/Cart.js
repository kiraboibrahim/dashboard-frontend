import React from "react";
import useCart from "./useCart";
import CartItem from "./CartItem";
import { Box, Button, Typography } from "@mui/joy";
import { formatCurrency } from "../../utils";

export default function Cart() {
  const [cart, dispatch] = useCart();
  const totalCost = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const cartItems = cart.map((item) => (
    <CartItem item={item} dispatch={dispatch} />
  ));
  return (
    <Box
      maxWidth={700}
      sx={{ marginLeft: "auto", marginRight: "auto", padding: 2 }}
    >
      <Typography level="h2" sx={{ marginBottom: 2 }}>
        Cart
      </Typography>
      <Typography level="h3">{formatCurrency(totalCost)}</Typography>
      {cartItems}
      <Button fullWidth={true} color="success">
        Checkout ({formatCurrency(totalCost)})
      </Button>
    </Box>
  );
}
