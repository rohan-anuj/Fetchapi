import "./App.css";

import { Fetch } from "./Fetch";
import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <Fetch>
      <div className="app">
        <Nav />
        <Home />
      </div>
    </Fetch>
  );
}

export default App;
