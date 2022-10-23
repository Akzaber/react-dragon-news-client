import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image src={image_url} className="img-fluid"></Image>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Read All News In This Categgory</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
