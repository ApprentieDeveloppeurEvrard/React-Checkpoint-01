import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Evrard";

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: "18rem" }} className="shadow-lg">
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3 className="mt-3">Bonjour, {firstName ? firstName : "!"}</h3>
      {firstName && (
        <img src={require("./assets/Sans_titre.jpg")} alt="profile" className="mt-2" />
      )}
    </Container>
  );
}

export default App;
