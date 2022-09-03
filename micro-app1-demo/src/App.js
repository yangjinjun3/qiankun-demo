import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import User from "./pages/User"
import Admin from "./pages/Admin"

function App() {
  return (
    <div className="App">
      <Link to={"/"}>micro-app1 首页</Link>|
      <Link to={"/user"}>micro-app1/user</Link>|
      <Link to={"/admin"}>micro-app1/admin</Link>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          micro1
        </a>
      </header>
    </div>
  );
}

export default App;
