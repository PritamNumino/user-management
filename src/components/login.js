import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import AuthUser from "./authUser";
import { validateLogin } from "../utilities/validations";
import { getHash } from "../utilities/createHash";
import { Link } from "react-router-dom";

const Login = () => {
  const { http, setToken } = AuthUser();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const submitForm = async (e) => {
    const { username, password } = form;
    e.preventDefault();
    try {
      const formErrors = validateLogin(form);
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
        const key = await getHash(password);
        if (key !== "Invalid Password") {
          const response = await http.post("login", {
            username: username,
            password: key,
          });
          setToken(response.data["access-token"]);
        } else {
          setErrors({ password: "Invalid Password" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="mt-5 m-auto w-50 ">
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={form.username}
            onChange={(e) => setField("username", e.target.value)}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLink">
          <Link to="/forgetPassword">Forget Password</Link>
        </Form.Group>
        
        <Button
          className="w-100"
          variant="dark"
          type="submit"
          onClick={submitForm}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
