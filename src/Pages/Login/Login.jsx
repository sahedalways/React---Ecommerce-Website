import React from "react";
import {
  LoginContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link
} from "./LoginElements";

const Login = () => {
  return (
    <LoginContainer>
      <Wrapper>
        <Title>Login Account</Title>
        <Form>
          <Input placeholder="Enter your user name..." />
          <Input placeholder="Enter your email address..." />
          <Input placeholder="Enter your password..." />
          <Button>LOGIN</Button>
          <Link>Do Not You Remember the Password?</Link>
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
};

export default Login;
