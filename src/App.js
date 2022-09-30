import "./App.css";
import { useState } from "react";
import MiApi from "./components/MiApi";
import Input from "./components/Input";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div>
        <Input search={search} setSearch={setSearch} />
      </div>
      <div>
        <MiApi search={search} />
      </div>
    </div>
  );
}

export default App;
