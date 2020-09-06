import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comment from "../Comment/Comment";

const useStyles = makeStyles({
  root: {
    maxWidth: 845,
  },
  media: {
    height: 440,
  },
});

const Detail = () => {
  const classes = useStyles();

  const { userID } = useParams();

  const [info, setInfo] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts/${userID}/comments`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts/${userID}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, [userID]);
  const mainbody = {
    margin: "auto",
    justifyContent: "center",
    display: "center",
    width: "auto",
  };

  return (
    <div>
      <Card style={mainbody} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ibb.co/GJNkfGN/SOCIAL-BUDDY.png"
            title="Social Buddy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>Title:</strong>
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Body:</strong> {info.body}
            </Typography>
            <CardActions></CardActions>
          </CardContent>
        </CardActionArea>
      </Card>

      <div>
        {comments.map((comment) => (
          <Comment element={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Detail;
