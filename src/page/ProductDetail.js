import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Alert, Dropdown, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/wkqkcmd/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == "")
    return (
      <Container className="loading">
        <Spinner animation="grow" />
      </Container>
    );

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
            <img src={product.img} />
          </Col>
          <Col xs={12} md={6}>
            <h4>{product.title}</h4>
            <div>{product.price}원</div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size?.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
