import { Link } from "gatsby";
import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  Radius: "4px",
};
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function PostCard({ data }) {
  console.log(data);
  return (
    <div style={center}>
      <Link
        to={`/blog/${data.slug}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>{data.frontmatter.title} </Card.Title>
            <Card.Subtitle>
              {data.frontmatter.date} | {data.frontmatter.topic}
            </Card.Subtitle>
            <Card.Text>{data.excerpt}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
