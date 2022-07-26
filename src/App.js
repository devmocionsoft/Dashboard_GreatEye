import "./App.css";
import Headbar from "./components/Headbar";
import HeatmapSelector from "./components/HeatmapSelector";
import CounterSelector from "./components/CounterSelector";

function App() {
  return (
    <div className="App">
      <Headbar />
      <HeatmapSelector />
      <CounterSelector />
    </div>
  );
}

export default App;
