import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
  },
  media: {
    height: 340,
  },
});
const Home = () => {
  const classes = useStyles();

  const buttonStyle = {
    width: "300px",
    backgroundColor: "pink",
    margin: "auto",
    display: "inline",
    justifyContent: "center",
    textDecoration: "none",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    marginLeft: "10px",
    fontSize: "3vh",
  };
  const listStyle = {
    marginLeft: "45px",
    fontSize: "14",
    fontWeight: "700",
  };

  const cardStyle = {
    display: "inline",
    margin: "0",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "800px",
    height: "500px",
    display: "inline-block",
    margin: "0",
    justifyContent: "center",
  };

  return (
    <div>
      <nav>
        <ul style={navStyle}>
          <li style={listStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={listStyle}>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </nav>
      <Card style={cardStyle} className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={imgStyle}
            className={classes.media}
            image="https://i.ibb.co/GJNkfGN/SOCIAL-BUDDY.png"
            title="Social Buddy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Social Buddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Find posts from your Favorite People
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link style={buttonStyle} to="/post">
            <Button size="large" color="secondary">
              See All Posts&nbsp;&nbsp;
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
