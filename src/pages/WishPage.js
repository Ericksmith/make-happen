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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import routes from "../constants/routes";
import logo from "../static/wishHappensLogo.png";
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

class WishPage extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false, modalTitle: "", text: "", cost: "" };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDonate = () => {};

  handleClickOpen = (modalTitle, text, cost) => {
    this.setState({ open: true, modalTitle, text, cost });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, content } = this.props;
    const { open, modalTitle, text, cost } = this.state;
    let tileData = [];
    let titleDataFuneded = [];
    if (content.tileData) {
      tileData = content.tileData;
    }
    if (content.titleDataFuneded) {
      titleDataFuneded = content.titleDataFuneded;
    }
    return (
      <div className={styles.container}>
        <Link to={routes.HOME}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <Grid container spacing={16}>
          <Grid item xs={12} md={9}>
            <Paper className={classes.root}>
              <Typography variant="h6" gutterBottom>
                {content.title}
              </Typography>
              <Typography variant="body1">{content.description}</Typography>
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
              {content.donors.map(donation => (
                <Typography variant="caption">{donation}</Typography>
              ))}
            </div>
          </Grid>
        </Grid>
        <GridList cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
            <ListSubheader
              color="primary"
              className={classes.subListText}
              component="div"
            >
              Items needed to make this wish happen
            </ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile cols={1} key={tile.key}>
              <img className={styles.tileImg} src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                // subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() =>
                      this.handleClickOpen(tile.title, tile.text, tile.cost)
                    }
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <GridList cellHeight={250} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
            <ListSubheader
              color="primary"
              className={classes.subListText}
              component="div"
            >
              Items that are donated
            </ListSubheader>
          </GridListTile>
          {titleDataFuneded.map(tile => (
            <GridListTile cols={1} key={tile.key}>
              <img
                className={styles.tileImgDonated}
                src={tile.img}
                alt={tile.title}
              />
              <GridListTileBar
                title={tile.title}
                // subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() =>
                      this.handleClickOpen(tile.title, tile.text, tile.cost)
                    }
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {modalTitle}
            <DialogContentText id="alert-dialog-description">
              {cost}
            </DialogContentText>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button color="secondary" variant="contained" autoFocus>
              Donate
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(matStyles)(WishPage);
