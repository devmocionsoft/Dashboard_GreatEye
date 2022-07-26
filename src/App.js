import "./App.css";
import CounterSelector from "./components/CounterSelector";
import HeatmapSelector from "./components/HeatmapSelector";

function App() {
  return (
    <div className="App">
      <HeatmapSelector />
      <CounterSelector />
    </div>
  );
}

export default App;
