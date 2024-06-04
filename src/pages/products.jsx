import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import axios from '../api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/carts')
      .then((res) => setProducts(res.data.carts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <section className="h-100 gradient-custom">
        <Container className="py-5">
          <Row className="d-flex justify-content-center my-4">
            {products?.map((element) => (
              <Col md={4} key={element.id}>
                <Card className="mb-4">
                  <Card.Header>
                    <Image src={element.products[0].thumbnail} alt={element.products[0].title} />
                  </Card.Header>
                  <Card.Body>
                    <h5>{element.products[0].title.split('').slice(0, 20).join('')}</h5>
                    <div className="product_about">
                      <span className="bg-warning p-1 mt-1 mb-1">
                        Price: {element.products[0].price}$
                      </span>
                      <p>Quantity: {element.products[0].quantity}</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos retur?</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-danger">
                        <RiDeleteBin5Line />
                      </button>
                      <button className="btn btn-success">
                        <FaRegHeart />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
