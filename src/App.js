import SketchArea from './components/SketchArea'
import './App.css';
import { Blockchain } from './utils/Blockchain';

function App() {
  
  return (
    <div className="container">
      <h1>LEEQUID Metrics</h1>
      <SketchArea blockchain={new Blockchain()}/>
    </div>
  );
}

export default App;
