import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [error, setError] = useState("");

  const getProduct = async () => {
    try {
      let keyword = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/wkqkcmd/noona-hnm/products?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다.`);
        } else {
          throw new Error("결과가 없습니다.");
        }
      }
      setData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {data.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
