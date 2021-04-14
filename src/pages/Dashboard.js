import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Dashboard(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
  }

  return (
    <div>
      <div>Dashboard</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Dashboard;