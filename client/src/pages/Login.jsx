import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <section>
      <form action="">
        <div>
          <header>
            <h1>Login Page</h1>
          </header>
        </div>

        <div>
          <label htmlFor="email">UserName</label>
          <input type="email" id="email" name="username"/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
        </div>

        <div>
         <button type="submit">Login</button>
        </div>

        <div>
          <p>Don't have an account</p> <Link to='/signup'>SignUp</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
