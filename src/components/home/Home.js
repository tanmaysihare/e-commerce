import React,{useState} from "react";
import { Button, Card, Container, Nav, Navbar, Alert} from "react-bootstrap";


const Home = () => {
  const [show, setShow] = useState(true);
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
    <Card style={{width: "18rem",margin:"2.5rem"}} className="mb-5">
        <Card.Header>{item.header}</Card.Header>
        <Card.Img src={item.imageUrl}/>
        <Card.Text>{`$${item.price}`}</Card.Text>
        <Button>ADD TO CART</Button>
    </Card>
  ))
  const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]
    const cartItems =      cartElements.map((item) => (
      <Card style={{width: "11rem",margin:"2.5rem"}} className="mb-5">
          <Card.Header>{item.header}</Card.Header>
          <Card.Img src={item.imageUrl}/>
          <Card.Text>{`$${item.price}`}</Card.Text>
        
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
        {!show && <Button variant="dark" onClick={()=> setShow(true)}>CART</Button>}
      </Navbar>
      <Card style={{width:"16rem",position:"revert-layer",float:"right"}}>
      <Alert show={show} variant="success">
        <Alert.Heading>IN YOUR CART</Alert.Heading>
        <hr />
        {cartItems}
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close 
          </Button>
        </div>
      </Alert>
      </Card>
      <Container>
      {mapping}
      </Container>
      <Container style={{height:"9rem", position:"sticky"}}>
     <div style={{textAlign:"center",position:"static"}}>
     <Button variant="dark" style={{color:"lavender",textAlign:"center"}} >See The Cart</Button>    
   </div>
  <Card bg="primary" style={{height:"7rem", position:"sticky"}}>
    <Card.Title style={{color:"white",margin:"2rem"}}> <h1> THE GENERICS </h1></Card.Title>
  </Card>
  </Container>
    </>
  );
};
export default Home;
