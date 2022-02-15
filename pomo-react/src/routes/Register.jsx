import {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import { register } from "../helpers/helpers"

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  };

  return (
      <main>
        <h2>Register</h2>

        <Form action="/register" method="post">

        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
        </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
      </Form>

        {/* <form action="/register" method="post">
          <label>User Name:
            <input type="text" name="username"></input>
          </label>
          <label>Email:
            <input type="text" name="email"></input>
          </label>
          <label>Password:
            <input type="password" name="password"></input></label>
          <button type="submit">Register</button>
        </form> */}
      </main>
)};