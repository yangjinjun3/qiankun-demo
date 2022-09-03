import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to={"/micro-app1"}>micro-app1</Link>|
      <Link to={"/micro-app2"}>micro-app2</Link>|
      <Link to={"/micro-app3"}>micro-app3</Link>|
      <div id="micro-app1"></div>
      <div id="micro-app2"></div>
      <div id="micro-app3"></div>
    </div>
  );
}

export default App;
