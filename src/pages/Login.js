import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = props.location.state?.referer || '/';

  function postLogin() {
    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');
    if(userName === storedUserName && storedPassword === password){
        setAuthTokens('authenticated');
        setLoggedIn(true);
        setIsError(false)
    }else {
        setAuthTokens(null);
        setLoggedIn(false);
        setIsError(true)
    }
    
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;;
  }

  return (
    <Card>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;