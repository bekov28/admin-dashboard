import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
          }}
        >
          <Link to={"/motor"} style={{ textDecoration: "none" }}>
            {" "}
            <ListItemButton>Motor</ListItemButton>
          </Link>
          <Link to={"/caravan"} style={{ textDecoration: "none" }}>
            <ListItemButton>Caravan</ListItemButton>
          </Link>
          <Link to={"/tuning"} style={{ textDecoration: "none" }}>
            <ListItemButton>Tuning</ListItemButton>
          </Link>
          <Link to={"/usedCar"} style={{ textDecoration: "none" }}>
            <ListItemButton>Used Car</ListItemButton>
          </Link>
          <Link to={"/camping"} style={{ textDecoration: "none" }}>
            <ListItemButton>Camping Place</ListItemButton>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
