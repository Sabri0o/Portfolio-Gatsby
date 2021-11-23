import React from "react";
import PostCardHome from "./postCardHome";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between ",
  margin: "50px",
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
    <div style={{ backgroundColor: "#EDF7FA"}}>
      <Row style={containerStyle}>
        <Col style={{ padding: "25px"}}>
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
        <Col style={{ padding: "25px"}}>
          <div style={{ padding: "5px", height: "40px" }}>
            <Link to="/" style={viewAll}>
              view all
            </Link>
          </div>
          <PostCardHome />
        </Col>
      </Row>
    </div>
  );
}
