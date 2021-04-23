import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";


interface Iitem {
  title: string;
  id: number;
  image: string;
}

const useStyles = makeStyles((theme) => ({
  navBar: { backgroundColor: "white" },
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    color: "black",
    fontSize: "1rem",
    padding: "0.5rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchIcon: {
    color: "black",
  },
  backTitle: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "0.3rem",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  dropdown: {
    paddingLeft: "1rem",
  },
}));

export default function Navbar(props: any) {
  const [state, setState] = React.useState({ brand: "" });
  const handleChange = (event: any) => {
    setState({
      ...state,
      brand: event.target.value,
    });
  };
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Toolbar>
        <div className={classes.backTitle}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <KeyboardBackspaceIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            VAN HEUSEN
          </Typography>
          <div className={classes.dropdown}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-helper">Brands</InputLabel>
              <NativeSelect value={state.brand} onChange={handleChange}>
                <option aria-label="None" value={state.brand}>
                  {state.brand}
                </option>

                {props.brands.length &&
                  props.brands.map((item: Iitem, index: number) => (
                    <option value={item.title} key={index}>
                      {item.title}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className={classes.searchWrapper}>
          <SearchIcon className={classes.searchIcon} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
