import React, { useState } from "react";
import {
  Button,
  Checkbox,
  TextField,
  Autocomplete,
  IconButton,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MaterialUIDemo = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <h1>Material UI Demo</h1>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="simple tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>

      <Button onClick={toggleDialog}>Open Dialog</Button>
      <Checkbox checked={tabValue === 0} onChange={() => setTabValue(0)} />
      <TextField label="Sample Input" />
      <Autocomplete
        options={["Option 1", "Option 2", "Option 3"]}
        renderInput={(params) => (
          <TextField {...params} label="Choose an option" />
        )}
      />
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={menuAnchorEl}
        keepMounted
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active
                  direction={sortDirection}
                  onClick={toggleSortDirection}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                John Doe
              </TableCell>
              <TableCell align="right">30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Jane Smith
              </TableCell>
              <TableCell align="right">25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialogOpen} onClose={toggleDialog}>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          This will help us provide more relevant results.
        </DialogContent>
      </Dialog>

      <Avatar src="/broken-image.jpg" />
    </div>
  );
};

export default MaterialUIDemo;
