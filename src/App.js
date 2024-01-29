import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

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
        <ButtonComponent nameToShow="Scopri di più" />
        <ButtonComponent nameToShow="Richiedi preventivo" />
        <ImageComponent imageSrc="https://placedog.net/400" imageAlt="cane" />
      </header>
    </div>
  );
}

export default App;
