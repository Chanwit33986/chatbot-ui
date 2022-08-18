import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authenStore, usernameStore } from "../Stores/Authen";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const setLogin = useSetRecoilState(authenStore);
  const setUsername = useSetRecoilState(usernameStore);
  const Login = (e) => {
    e.preventDefault();
    if (email === "admin@chatbot.com" && password === "P@ssw0rd") {
      Swal.fire({
        icon: "success",
        title: "Login success!",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        setLogin(true);
        setUsername("hello! " + email);
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Fail Login",
        text: "Username or Password incorrect !",
        showConfirmButton: false,
        timer: 800,
      });
    }
  };
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div class="col-sm-6 col-12">
          <p
            className="text-center"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            LOGIN CHATBOT
          </p>
          <Form onSubmit={Login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me." />
            </Form.Group> */}
            <div className="d-grid gab-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
