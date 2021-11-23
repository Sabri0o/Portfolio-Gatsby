import React from "react";
import Layout from "../components/layout";
import Info from "./info";
import RecentPosts from "./recentPosts";
export default function Home() {
  return (
    <Layout>
      <Info />
      <RecentPosts />
    </Layout>
  );
}
