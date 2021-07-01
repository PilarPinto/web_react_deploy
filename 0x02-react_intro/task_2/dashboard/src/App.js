import hbtnLogo from './holbertonLogo.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={hbtnLogo} className="App-logo" alt="mainLogo" />
        <h1 className="Title">School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
