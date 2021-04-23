import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: "5rem",
    },
    toolbar: theme.mixins.toolbar,
    selected: {
      color: "blue",
    },
    blackText: {
      color: "black",
    },
    subMenuTitle: {
      display: "flex",
      justifyContent: "flex-start",
      paddingLeft: "2rem",
    },
  })
);

export default function Sidebar() {
  const classes = useStyles();

  const [openBrandbookMenu, setBrandBookMenu] = React.useState(false);
  const [openProductMenu, setProductMenu] = React.useState(false);
  const [active, setActive] = React.useState(0);

  const setOpenBrandBook = () => {
    setBrandBookMenu(!openBrandbookMenu);
  };

  const handleClickProductMenu = () => {
    setProductMenu(!openProductMenu);
  };

  const handleSelect = (active: number) => {
    setActive(active);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            onClick={() => {
              setOpenBrandBook();
              handleSelect(0);
            }}
            classes={{ selected: classes.selected }}
            selected={active === 0}
          >
            <ListItemText primary="Brand Book" />
            {openBrandbookMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openBrandbookMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(1);
                }}
                selected={active === 1}
              >
                <ListItemText primary="Introduction video" />
              </ListItem>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(2);
                }}
                selected={active === 2}
              >
                <ListItemText primary="Van Heusen Brandbook" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            classes={{ selected: classes.selected }}
            onClick={() => {
              handleSelect(3);
            }}
            selected={active === 3}
          >
            <ListItemText primary="Seasonal Stories" />
          </ListItem>
          <ListItem
            button
            classes={{ selected: classes.selected }}
            onClick={() => {
              handleSelect(4);
            }}
            selected={active === 4}
          >
            <ListItemText primary="Seasonal Colors" />
          </ListItem>
          <ListItem
            button
            classes={{ selected: classes.selected }}
            onClick={() => {
              handleSelect(5);
            }}
            selected={active === 5}
          >
            <ListItemText primary="Concept" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClickProductMenu();
              handleSelect(6);
            }}
            classes={{ selected: classes.selected }}
            selected={active === 6}
          >
            <ListItemText primary="Product" />
            {openProductMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openProductMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(7);
                }}
                selected={active === 7}
              >
                <ListItemText primary="Traveler" />
              </ListItem>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(8);
                }}
                selected={active === 8}
              >
                <ListItemText primary="Never Tuck" />
              </ListItem>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(9);
                }}
                selected={active === 9}
              >
                <ListItemText primary="Flex" />
              </ListItem>
              <ListItem
                button
                className={classes.subMenuTitle}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  handleSelect(10);
                }}
                selected={active === 10}
              >
                <ListItemText primary="Key Looks" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            classes={{ selected: classes.selected }}
            onClick={() => {
              handleSelect(11);
            }}
            selected={active === 11}
          >
            <ListItemText primary="Product Board" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
