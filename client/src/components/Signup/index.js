import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import '../styles.css';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '',username: '', password: '' });
  const [addUser, {error}] = useMutation(ADD_USER);
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      setValidated(true)
      const { data } = await addUser({
        variables: {...formState } 
      });
      Auth.login(data.addUser.token);
       console.log(formState)
    } catch (e) {
      console.error(e)
    }
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
      <br/>
      <Link to="/login">
        ← Go to Login
      </Link>
      <body>
        <section class='singupForm'>
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
        {error && <div class='input_field'>Username and/or email already taken</div>}
      </form>
      </section>
      </body>
    </div>
    
  );

}

export default Signup;