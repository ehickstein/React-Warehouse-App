import React from 'react';

const Login = () => {
  return (
    <div className="row">
      <div className="col s12">
        <h1>React Warehouse App - Login</h1>
        <h5>Username:</h5>
        <input className='loginUsername'></input>
        <h5>Password:</h5>
        <input className='loginPassword'></input>
        <button className='loginButton' type='submit'></button>
      </div>
    </div>
  )
}

export default Login;