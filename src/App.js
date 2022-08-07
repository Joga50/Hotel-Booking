import "./App.css";
import Header from "./components/Header";
import Filtros from "./components/Filtros";

import Hotels from "./components/Hotels";

function App() {
  return (
    <div className="App">
      <Header />
      <Filtros />
      <Hotels />
    </div>
  );
}

export default App;
