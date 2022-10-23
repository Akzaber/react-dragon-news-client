import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          name="photoURL"
          placeholder="Enter Your PhotoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
