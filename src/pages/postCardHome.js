import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  width: "100%",
  height: "200px",
  Radius: "4px",
};
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function PostCardHome(props) {
  return (
    <div style={center}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
