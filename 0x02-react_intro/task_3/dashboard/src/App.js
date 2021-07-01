import React from 'react';
import hbtnLogo from './holbertonLogo.jpg';
import './App.css';
import './utils';
import {getFooterCopy, getFullYear} from "./utils";
import { Notification } from './Notifications';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={hbtnLogo} className="App-logo" alt="mainLogo" />
        <h1 className="Title">School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <form style={{ "display": "flex", "flex-direction": "column", "width": "20%" }}>
            <label htmlFor="email">Email</label>
            <input type="email" style={{ "flex-basis": "0.2" }} name="email" id="email" />
            <label htmlFor="pwdInput">Password</label>
            <input type="password" name="pwdInput" id="pwdInput" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
