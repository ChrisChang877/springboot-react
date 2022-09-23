import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <Form
      className="col-md-6 offset-md-3 border rounded p-4 mt-2"
      onSubmit={(e) => onSubmit(e)}
    >
      <h2>Add Employee</h2>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter Username"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/">
        <Button variant="danger" className="mx-2">
          Cancel
        </Button>
      </Link>
    </Form>
  );
};

export default AddUser;
