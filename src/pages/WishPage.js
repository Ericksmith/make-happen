import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import uuid from "uuid/v4";
import flight from "../static/flight.jpg";
import styles from "./WishPage.module.scss";

const matStyles = theme => ({
  root: {
    padding: "4em"
  },
  donateButton: {
    fontSize: 50
  },
  gridRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "auto"
  },
  icon: {
    color: theme.palette.secondary.main
  },
  subListText: {
    fontSize: 20
  }
});

const tileData = [
  {
    key: uuid(),
    title: "Camera",
    description: "A camera to remember the trip with",
    img: "/images/disney/camera.jpg",
    cost: "$85"
  },
  {
    key: uuid(),
    title: "Meals",
    description: "Meals provided to the family during the trip",
    img: "/images/disney/meals.jpg",
    cost: "200"
  },
  {
    key: uuid(),
    title: "Luggage",
    description: "Provide luggage to make the trip possible",
    img: "/images/disney/luggage.jpg",
    cost: "400"
  },
  {
    key: uuid(),
    title: "Souvenirs",
    description: "Provide souvenirs during the trip to make it unforgateable!",
    img: "/images/disney/souvenir.jpg",
    cost: "2000"
  },
  {
    key: uuid(),
    title: "Flight",
    description: "4 round trip tickets",
    img: flight,
    cost: "1500"
  },
  {
    key: uuid(),
    title: "Hotel",
    description: "A hotel room for the family",
    img: "/images/disney/hotel.jpg",
    cost: "2000"
  }
];

class WishPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDonate = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={styles.container}>
        <Grid container spacing={16}>
          <Grid item xs={12} md={9}>
            <Paper className={classes.root}>
              <Typography variant="h6" gutterBottom>
                Dollar Shave Club Sends a Make-A-Wish Kid to Disney World
              </Typography>
              <Typography variant="body1">
                This holiday season, the team at Dollar Shave Club wants to send
                one Make-A-Wish child and their family to Disney World to
                surround them with fairy tale magic and enchantment. We need
                your support to help us cover the costs. Click an item below to
                help us fund a child's dream come true.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              onClick={this.handleDonate}
              color="secondary"
              variant="contained"
              className={classes.donateButton}
            >
              Donate
            </Button>
            <br />
            <br />
            <div>
              <Typography variant="subtitle1">Current donations:</Typography>
              <Typography variant="caption">
                John Doe Donated Luggage!
              </Typography>
              <Typography variant="caption">
                Jane Doe Donated A Flight!
              </Typography>
            </div>
          </Grid>
        </Grid>
        <GridList cellHeight={250} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader
              color="primary"
              className={classes.subListText}
              component="div"
            >
              Items that are donated
            </ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.key}>
              <img className={styles.tileImg} src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <GridList cellHeight={250} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader
              color="primary"
              className={classes.subListText}
              component="div"
            >
              Items that are donated
            </ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.key}>
              <img
                className={styles.tileImgDonated}
                src={tile.img}
                alt={tile.title}
              />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(matStyles)(WishPage);
