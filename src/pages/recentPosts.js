import React from "react";
import PostCardHome from "./postCardHome";
import {  Col } from "react-bootstrap";
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
            <Link to="/" style={recentPost}>
              Recent posts
            </Link>
          </div>
          <PostCardHome />
        </Col>
        <Col style={{ padding: "10px" }}>
          <div style={{ padding: "5px", height: "40px" }}>
            <Link to="/" style={viewAll}>
              view all
            </Link>
          </div>
          <PostCardHome />
        </Col>
      </div>
    </div>
  );
}
