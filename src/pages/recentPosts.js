import React from "react";
import PostCard from "./postCard";
import { Col } from "react-bootstrap";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "30px",
};

const recentPost = {
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "22px",
  color: "#21243D",
};

const viewAll = {
  display: "flex",
  justifyContent: "flex-end",
  fontFamily: "Heebo",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  color: "#00A8CC",
};

export default function RecentPosts() {
  return (
    <div style={{ backgroundColor: "#EDF7FA", width: "auto" }}>
      <div style={containerStyle}>
        <Col style={{ padding: "10px" }}>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              height: "40px",
            }}
          >
            <span style={recentPost}>Recent posts</span>
          </div>
          <PostCard />
        </Col>
        <Col style={{ padding: "10px" }}>
          <div style={{ padding: "5px", height: "40px" }}>
            <Link to="/blog" style={viewAll}>
              view all
            </Link>
          </div>
          <PostCard />
        </Col>
      </div>
    </div>
  );
}