import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import './styles.css';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username, email: formState.email, password: formState.password, sex: "Male", bio: 'demo'
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container my-1">
      <p>Welcome to the TUR family!</p>
      <br/>
      <Link to="/login">
        ← Go to Login
      </Link>
      <body>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>

        <div className="flex-row space-between my-2">
          <label htmlFor="email" class='input_field'>Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="username"class='input_field' >username:</label>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="pwd" class='input_field'>Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
      </body>
    </div>
    
  );

}

export default Signup;