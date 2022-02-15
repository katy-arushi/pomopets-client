import {useState} from "react";
import { login } from "../helpers/helpers"
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(user).then((response) => {
      console.log('response', response);
      navigate("/", { state: response.data });
    })
    .catch((error) => {
      throw error;
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  };

  return (
    <main>
      <h2>Login</h2>
      <Form action="/login" method="post">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </main>
)};