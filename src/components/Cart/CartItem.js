import {
  Card,
  Typography,
  Grid,
  AspectRatio,
  Box,
  Button,
  IconButton,
  CardContent,
} from "@mui/joy";
import React from "react";
import Add from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import logo from "../../logo.webp";
import { formatCurrency } from "../../utils";

export default function CartItem({ item, dispatch }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <Grid container spacing={3}>
        <Grid xs={3}>
          <AspectRatio maxHeight={120}>
            <img src={logo} alt={item.name} />
          </AspectRatio>
        </Grid>
        <Grid xs={9}>
          <CardContent>
            <Typography level="title-sm">{item.name}</Typography>
            <Typography level="h4">{formatCurrency(item.price)}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid xs={7}>
          <Button
            variant="plain"
            color="success"
            onClick={() => dispatch({ type: "REMOVE", id: item.id })}
          >
            Remove
          </Button>
        </Grid>
        <Grid xs={5}>
          <Box display="flex" justifyContent="space-between">
            <IconButton
              variant="solid"
              size="sm"
              color="success"
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  id: item.id,
                  quantity: --item.quantity,
                })
              }
              disabled={item.quantity === 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton
              variant="solid"
              size="sm"
              color="success"
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  id: item.id,
                  quantity: ++item.quantity,
                })
              }
            >
              <Add />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
