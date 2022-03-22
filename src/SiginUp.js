import React from "react";
import UserPool from "./UserPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

function SignUp() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    address: "",
    name: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // const emailAttribute = new CognitoUserAttribute({
    //   Name: "email",
    //   Value: data.email,
    // });
    const nameAttribute = new CognitoUserAttribute({
      Name: "name",
      Value: data.name,
    });
    const addressAttribute = new CognitoUserAttribute({
      Name: "address",
      Value: data.address,
    });

    UserPool.signUp(
      data.email,
      data.password,
      [nameAttribute, addressAttribute],
      null,
      (error, data) => {
        if (error) {
          return console.log(error);
        }
        console.log(data);
      }
    );
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
      <h2>name</h2>
      <input
        onChange={(v) => {
          setData((pre) => {
            return { ...pre, name: v.target.value };
          });
        }}
      />
      <h2>address</h2>
      <input
        onChange={(v) => {
          setData((pre) => {
            return { ...pre, address: v.target.value };
          });
        }}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default SignUp;
