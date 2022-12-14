import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummaryCard = ({news}) => {
  const {_id, author, details, title, image_url, rating, total_view} = news;
  return (
    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
            <Image
              src={author?.img}
              style={{height:'60px'}}
              roundedCircle
              className='me-2'
            ></Image>
          <div>
            <p>{author?.name} <br /> {author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className='me-2'></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
          details.length > 200?
          <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
          :
          <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className='d-flex'>
          <FaStar className='text-warning me-2'></FaStar>
          <p>{rating.number}</p>
        </div>
        <div className='d-flex'>
          <FaEye className='me-2'></FaEye>
          <p>{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;