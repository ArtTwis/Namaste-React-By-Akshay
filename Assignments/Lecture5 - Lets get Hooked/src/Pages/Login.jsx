import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginComponent = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleLogin = () => {
    //
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setUserEmail(event.target.value);
      return;
    }

    if (event.target.name === "password") {
      setUserPassword(event.target.value);
      return;
    }
  };

  return (
    <div className="loginForm">
      <div className="formComponent">
        <Form>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              id="userEmail"
              name="email"
              type="email"
              value={userEmail}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="userPassword">Password</Label>
            <Input
              id="userPassword"
              name="password"
              type="password"
              value={userPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <Button onClick={handleLogin}>Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
