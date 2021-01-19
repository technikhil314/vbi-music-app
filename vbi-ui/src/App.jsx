import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const demo = async () => {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/users`);
      console.log(res);
      const text = await res.text();
      setData(text);
    }
    demo();
  }, []);
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
          {data || "Learn React"}
        </a>
      </header>
    </div>
  );
}

export default App;
