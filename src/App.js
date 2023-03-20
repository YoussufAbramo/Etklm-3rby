import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
=======
// import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import 'react-bootstrap/dist/react-bootstrap.min.js';
// import '@flaticon/flaticon-uicons';
import './index.css';
import { Header } from './Template/Header';
import { Content } from './Template/Content';
import { Aside } from './Template/Aside';
import { Footer } from './Template/Footer';

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Aside/>
      <Footer/>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
