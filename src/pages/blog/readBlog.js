import React from "react";
import Layout from "../../components/layout";

export default function readBlog() {
  const header = {
    display: "flex",
    justifyContent: "space-Between",
  };
  return (
    <Layout>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "200px",
          marginRight: "200px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          My blog
        </h1>
        <div>
          <div style={header}>
            <h5>23/11/2021</h5>
            <h5>1 min read</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet. Ex galisum sint est autem eveniet id
            deleniti assumenda eum provident laudantium est esse voluptatem est
            repellendus ratione. Ex sequi quas est asperiores odit eum
            voluptatem enim. Et officia aliquam qui corrupti eaque hic excepturi
            accusamus vel inventore alias non deleniti corrupti et molestiae
            quas. Et quidem corrupti et deserunt tempora et magni illum non
            culpa libero. Qui illo voluptatem et quas odit qui saepe molestiae
            hic galisum incidunt ut quod quibusdam hic ipsa rerum sit illo
            consequatur. Non delectus illo quo similique rerum in odio totam ea
            consequatur modi ut placeat fugiat hic unde minima eos consectetur
            assumenda. Id quis labore qui voluptate maxime ea voluptatem
            architecto.Lorem ipsum dolor sit amet. Ex galisum sint est autem
            eveniet id deleniti assumenda eum provident laudantium est esse
            voluptatem est repellendus ratione. Ex sequi quas est asperiores
            odit eum voluptatem enim. Et officia aliquam qui corrupti eaque hic
            excepturi accusamus vel inventore alias non deleniti corrupti et
            molestiae quas. Et quidem corrupti et deserunt tempora et magni
            illum non culpa libero. Qui illo voluptatem et quas odit qui saepe
            molestiae hic galisum incidunt ut quod quibusdam hic ipsa rerum sit
            illo consequatur. Non delectus illo quo similique rerum in odio
            totam ea consequatur modi ut placeat fugiat hic unde minima eos
            consectetur assumenda. Id quis labore qui voluptate maxime ea
            voluptatem architecto.
          </p>
        </div>
      </div>
    </Layout>
  );
}
