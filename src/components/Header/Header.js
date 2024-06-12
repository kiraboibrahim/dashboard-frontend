import React from "react";
import { Button, IconButton, Box, Badge } from "@mui/joy";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../logo.webp";
import useCart from "../Cart/useCart";
import Nav from "../Nav/Nav";

export default function Header() {
  const { cart } = useCart();
  return (
    <Box display="flex">
      <img src={logo} alt="Logo" width={100} height={100} />
      <Box
        display="flex"
        alignItems="center"
        sx={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Nav />
      </Box>

      <Box display="flex" alignItems="center" sx={{ marginLeft: "auto" }}>
        <Button color="success" sx={{ marginRight: 5 }}>
          Track Order
        </Button>

        <IconButton variant="soft" color="success">
          <Badge badgeContent={cart.length} showZero={false}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
}
