import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import "./main.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: "flex",
    width: "100vw",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  price: {
    fontSize: 11,
    "@media (max-width:350px)": {
      fontSize: 8,
    },
  },
}));
export default function MainPage(props) {
  const classes = useStyles();
  const handleOnClick = async (tile) => {
    await props.updateSelectedImage(tile);
    await props.history.push("/product");
  };
  if (props.marketData && props.selectedMarket.length !== 0) {
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">
              {props.selectedMarket}
            </ListSubheader>
          </GridListTile>
          {props.marketData.map((tile) => (
            <GridListTile key={tile.img} onClick={() => handleOnClick(tile)}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={
                  <Typography className={classes.price}>
                    Maximum Price:{tile.maximumPrice}
                  </Typography>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
