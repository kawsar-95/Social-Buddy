import React from "react";

const Error = () => {
  return (
    <div
      className="container"
      style={{
        paddingTop: "100px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <img
          className="img-responsive"
          src={
            "https://static.dribbble.com/users/180906/screenshots/2104519/screen_shot_2015-06-12_at_1.40.50_pm.png"
          }
          alt=""
        ></img>
      </div>
      <br></br>

      <div>
        <h1 className="text-danger text-responsive">404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error;
