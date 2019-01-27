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
import uuid from 'uuid/v4';
import flight from "../static/flight.jpg";
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
    image: disney,
    title: "Disney Land Trip",
    description: "I wish to go to Walt Disney Land",
    key: uuid()
  },
  {
    image: party,
    title: "",
    description: "",
    key: uuid()
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <Typography variant="title" gutterBottom>
          Wishes That Need Funding
        </Typography>
        <Grid container spacing={16}>
          {wishes.map(wish => (
          <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={wish.image}
                title="Disney Land Trip"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="primary">
                  {wish.title}
                </Typography>
                <Typography component="p">{wish.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="secondary">
                Learn how to help
              </Button>
            </CardActions>
          </Card>
        </Grid>
          ))}

          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={party}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quinceanera
                  </Typography>
                  <Typography component="p">I want to have a quinceanera</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Typography variant="title" gutterBottom>
          Wishes That Were Granted
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaFunded}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaFunded}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaFunded}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaFunded}
                  image={flight}
                  title="Disney Land Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney Land
                  </Typography>
                  <Typography component="p">lorem</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn how to help
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(matStyles)(HomePage);
