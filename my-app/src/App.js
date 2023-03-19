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
    </div>
  );
}

export default App;
