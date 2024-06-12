import { Box, List, ListDivider, ListItem, ListItemButton } from "@mui/joy";
import React from "react";

export default function Nav() {
  return (
    <>
      <Box component="nav">
        <List orientation="horizontal" role="navigation">
          <ListItem>
            <ListItemButton>Proudcts</ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem>
            <ListItemButton>Vendors</ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem>
            <ListItemButton>Drivers</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
