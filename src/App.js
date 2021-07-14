import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="textSection">
        <span className="text">facebook</span>
        <span className="text-sm">Connect with friends and the world<br></br> around you on Facebook.</span>
      </div>
      

      <div className="form-section">
        <div className="form">
          <input type="text"  placeholder="Email or Phone number"></input>
          <input type="password"  placeholder="Password"></input>
          <button className="login">Log In</button><br></br>
          <div>
            <a>Forgot password ?</a>
          </div><br></br>
          <hr style={{width:"100%"}} /><br></br>
          <button className="new">Create New Account</button>
        </div><br></br>
        <div>
            <span><text>Create a Page</text> for a celebrity, band or business.</span>
          </div>
      </div>

    </div>
  );
}

export default App;
