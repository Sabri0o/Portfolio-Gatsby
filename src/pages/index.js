import React from "react";
import Layout from "../components/layout";
import Info from "./info";
import RecentPosts from "./recentPosts";
import WorksHome from "./worksHome";
export default function Home() {
  return (
    <Layout>
      <Info />
      <RecentPosts />
      <WorksHome />
    </Layout>
  );
}
