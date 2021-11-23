import React from "react";
import { Link } from "gatsby";
import WorkCardHome from "./workCardHome";

const featuredWork = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  lineHeight: "60px",
  color: "#21243D",
};

export default function Works() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          marginLeft: "42px",
        }}
      >
        <Link to="/" style={featuredWork}>
          Featured work
        </Link>
      </div>
      <WorkCardHome />
      <WorkCardHome />
      <WorkCardHome />
    </div>
  );
}
