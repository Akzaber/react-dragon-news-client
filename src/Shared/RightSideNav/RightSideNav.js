import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../assets/brands/Brand1.png";
import Brand2 from "../../assets/brands/Brand2.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle></FaGoogle> SignIn With Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTiktok></FaTiktok> Tiktok
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Brand1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Brand2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
