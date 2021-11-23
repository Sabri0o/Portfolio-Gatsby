import React from "react";
import Layout from "../../components/layout";
import WorkCard from "../workCard";

export default function Work() {
  return (
    <Layout>
      <h2 style={{ marginLeft: "100px" }}>Feature work</h2>
      <div
        style={{ marginTop: "60px", marginLeft: "60px", marginRight: "60px" }}
      >
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </Layout>
  );
}
