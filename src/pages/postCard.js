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

export default function PostCard(props) {
  return (
    <div style={center}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
