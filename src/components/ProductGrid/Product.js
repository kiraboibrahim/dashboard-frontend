import React from "react";
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/joy";
import Add from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCart, { ADD, SET_QUANTITY } from "../Cart/useCart";
import logo from "../../logo.webp";
import { formatCurrency } from "../../utils";

export default function Product({ product }) {
  const { cart, dispatch } = useCart();
  const cartItem = cart.getItem(product.id);
  return (
    <Card>
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
        {cart.hasItem(product.id) ? (
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: 2 }}
          >
            <IconButton
              variant="solid"
              size="sm"
              color="success"
              onClick={() =>
                dispatch({
                  type: SET_QUANTITY,
                  id: product.id,
                  quantity: --cartItem.quantity,
                })
              }
              disabled={cartItem.quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{cartItem.quantity}</Typography>
            <IconButton
              variant="solid"
              size="sm"
              color="success"
              onClick={() =>
                dispatch({
                  type: SET_QUANTITY,
                  id: product.id,
                  quantity: ++cartItem.quantity,
                })
              }
            >
              <Add />
            </IconButton>
          </Box>
        ) : (
          <Button
            variant="solid"
            color="success"
            sx={{ marginTop: 2 }}
            onClick={() =>
              dispatch({
                type: ADD,
                quantity: 1,
                name: product.name,
                price: product.price,
                id: product.id,
              })
            }
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
