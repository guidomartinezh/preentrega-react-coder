import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products.js";
import { ItemList } from "./ItemList.jsx";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    mypromise.then((response) => {
      const filterById = response.find((item) => item.id === id);
      setItems(filterById);
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <ItemList items={items} />
    </Container>
  );
};
