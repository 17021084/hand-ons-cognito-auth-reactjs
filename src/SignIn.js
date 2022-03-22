import React from "react";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

function SignIn() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: data.email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: data.email,
      Password: data.password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log(result);
      },
      onFailure: (err) => {
        console.log(err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log(userAttributes);
        console.log(requiredAttributes);
      },
    });
  };

  return (
    <div className="App">
      <h1> Login</h1>
      <h2>Email </h2>
      <input
        onChange={(v) =>
          setData((pre) => {
            return { ...pre, email: v.target.value };
          })
        }
      />
      <h2>Password</h2>
      <input
        onChange={(v) => {
          setData((pre) => {
            return { ...pre, password: v.target.value };
          });
        }}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default SignIn;
