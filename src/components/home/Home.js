import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Home = () => {
  const productsArr = [
    {
        header: "Album-1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
        header: "Album-2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
        header: "Album-3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
        header: "Album-4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
const mapping =      productsArr.map((item) => (
    <Card style={{width: "18rem",float:"left",margin:"2.5rem"}} className="mb-5">
        <Card.Header>{item.header}</Card.Header>
        <Card.Img src={item.imageUrl}/>
        <Card.Text>{`$${item.price}`}</Card.Text>
        <Button>ADD TO CART</Button>
    </Card>
  ))
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {mapping}
     <Container style={{textAlign:"center"}} >
     <Button variant="dark" style={{color:"lavender"}} >See The Cart</Button>    
      </Container>
  <Card bg="primary" style={{height:"7rem"}}>
    <Card.Title style={{color:"white",margin:"2rem"}}> <h1> THE GENERICS </h1></Card.Title>
  </Card>
    </>
  );
};
export default Home;
