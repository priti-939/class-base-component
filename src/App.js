import logo from './logo.svg';
import './App.css';
import Demo from './counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './ParnentComponent';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Demo />} />
          <Route path="/parent-to-child" element={<Profile />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
