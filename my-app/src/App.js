import React from "react";
import "./App.css";
import Search from "./Search";
import Overview from "./Overview";

function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <Overview />
        <Search />
      </div>
      <small>
        <a
          href="https://github.com/VivianaCodes/weather-react-app"
          class="open-code"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Viviana Milone
      </small>
    </div>
  );
}

export default App;
