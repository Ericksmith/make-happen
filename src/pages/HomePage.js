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
import flight from "../static/flight.jpg";

const matStyles = theme => ({
  root: {
    padding: "4em"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

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
          Wishes That Need Funded
        </Typography>
        <Grid container spacing={16}>
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
      </div>
    );
  }
}

export default withStyles(matStyles)(HomePage);
