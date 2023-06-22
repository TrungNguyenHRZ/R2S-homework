import './App.css';
import { useState } from 'react';
import './login.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  const[isSuccess, setIsSuccess] = useState(false);

  const handleUserNameChange = event => {
    setUserName(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(userName === 'Trung' && password ==='1') {
      setMessage("Login successfully!!!")
      setIsSuccess(true);
    } else {
      setMessage("Login failed!!!")
      setIsSuccess(false);
    }
  }

  return (
    <div className="App">
      <div className='form_container'>
      <h2>Login Form</h2>
      <p className={isSuccess ? 'success' : 'fail'}>{message}</p>
        <form action="">
          <table>
            <tr>
              <td><label htmlFor="name">User Name </label></td>
              <td><input type="text" id="userName" name="userName" value={userName} onChange={handleUserNameChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password </label></td>
              <td><input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required/></td>
            </tr>
          </table>
          <br />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
