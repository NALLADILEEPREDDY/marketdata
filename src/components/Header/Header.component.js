import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import AddLocationSharpIcon from "@material-ui/icons/AddLocationSharp";
import Popover from "@material-ui/core/Popover";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import {items} from '../../ReduxData/data'

const useStyles = makeStyles((theme) => ({
  appBar: {       
    color: "#fff",
    backgroundColor: "#212121",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPlace, setSelectedPlace] =  useState("Hyderabad");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelectedPlace=async(data)=>{
    await setSelectedPlace(data);    
    await props.updateSelectedMarket(data);
    await props.updateSelectedMarketData(items[data]);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MARKET PRICE
          </Typography>
          <Button
            aria-describedby={id}            
            color="inherit"
            onClick={handleClick}
          >
            <AddLocationSharpIcon />
            <span className="jss13">{selectedPlace}</span>
            <ArrowDropDownIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List
              component="nav"
              className={classes.root}
              aria-label="contacts"
            >
              {["Hyderabad","Warangal","Khammam","Guntur","Karimnagar"].map((data,index)=>{return(<ListItem key ={index} button>               
                <ListItemText primary={data} onClick={()=>handleSelectedPlace(data)}/>
              </ListItem>);}  )}           
            </List>
          </Popover>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
