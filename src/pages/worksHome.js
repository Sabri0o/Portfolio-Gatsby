import React from "react";
import WorkCard from "./workCard";

const featuredWork = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  lineHeight: "60px",
  color: "#21243D",
};

export default function WorksHome() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          marginLeft: "42px",
        }}
      >
        <span style={featuredWork}> Featured work</span>
      </div>
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </div>
  );
}
