import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Cat from "./pages/Cat"
import Dog from "./pages/Dog"

function App() {
  return (
    <div className="App">
      <Link to={"/"}>home</Link>|
      <Link to={"/cat"}>micro-app2 cat</Link>|
      <Link to={"/dog"}>micro-app2 dog</Link>
      <Routes>
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
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
          micro2
        </a>
      </header>
    </div>
  );
}

export default App;
