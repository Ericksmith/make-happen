import React, { Component } from "react";
import styles from "./Home.module.scss";
import logo from "../static/wishHappensLogo.png";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import routes from "../constants/routes";
import party from "../static/wishes/party.jpg";
import disney from "../static/wishes/disney.jpg";

const matStyles = theme => ({
  root: {
    padding: "4em"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  mediaFunded: {
    height: 140,
    opacity: "0.6"
  }
});

const wishes = [
  {
    image: "/images/wishes/disney.jpg",
    title: "Disney Land Trip",
    description: "I wish to go to Walt Disney Land",
    key: uuid(),
    route: routes.DISNEY
  },
  {
    image: "/images/wishes/quinceanera.jpg",
    title: "Quinceanera",
    description: "I want to have a quinceanera",
    key: uuid(),
    route: routes.QUINCEANERA
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="logo" />
        </div>
        <Paper className={classes.root}>
          <Typography variant="body1">
            Desicription of donation program --- Ugit lam autes sit et doluptium
            es et et et voluptatur? Ecum doloriatur, sitatur adit aut omnis ad
            que quam, quatus, nis dolum inctinc tatiis alique nos pa nullesto
            vendit plianda ectatur?
          </Typography>
        </Paper>
        <br />
        <Typography variant="h6" gutterBottom>
          Wishes That Need Funding
        </Typography>
        <Grid container spacing={16}>
          {wishes.map(wish => (
            <Grid item xs={12} md={4} key={wish.key}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={wish.route}>
                  <CardMedia
                    className={classes.media}
                    image={wish.image}
                    title={wish.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="primary"
                    >
                      {wish.title}
                    </Typography>
                    <Typography component="p">{wish.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    component={Link}
                    to={wish.route}
                  >
                    Learn how to help
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <br />
        <Typography variant="h6" gutterBottom>
          Wishes That Were Granted
        </Typography>
        <Grid container spacing={16}>
          {wishes.map(wish => (
            <Grid item xs={12} md={4} key={wish.key}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={wish.route}>
                  <CardMedia
                    className={classes.mediaFunded}
                    image={wish.image}
                    title={wish.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="primary"
                    >
                      {wish.title}
                    </Typography>
                    <Typography component="p">{wish.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    component={Link}
                    to={wish.route}
                  >
                    Learn how to help
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(matStyles)(HomePage);
