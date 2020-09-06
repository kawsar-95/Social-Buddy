import React from "react";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Comment = (props) => {
  const { name, email, body, id } = props.element;
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    justifyContent: "center",
    paddingTop: "20px",
  };

  const imageStyle = {
    height: "100px",
    borderRadius: "50%",
  };
  const contentDiv = {
    width: "66%",
    padding: "40px 40px",
    borderLeft: "1px solid grey",
    borderBottom: "1px solid grey",
    backgroundImage: "linear-gradient(30deg,orange,yellow)",
    textAlign: "left",
    marginLeft: "5px",
  };
  const fontStyle = {
    fontSize: "2vh",
  };
  const buttonStyle = {
    width: "50%",
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div style={divStyle}>
      <div>
        <img
          style={imageStyle}
          src={`https://api.adorable.io/avatars/160/${name}.png`}
          alt=""
        ></img>
      </div>

      <div style={contentDiv}>
        <h6 style={fontStyle}>
          <strong>Name:</strong> {name}
        </h6>
        <h6 style={fontStyle}>
          <strong>Email:</strong> {email}
        </h6>
        <hr></hr>

        <p>
          <strong>Comment:</strong> " {body} "
        </p>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <hr></hr>
        <Link style={buttonStyle} to="/post">
          <Button style={buttonStyle}>
            Back to All Posts&nbsp;&nbsp;
            <FontAwesomeIcon icon={faCoffee} />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Comment;
