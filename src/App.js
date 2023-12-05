import Dashboard from './components/Dashboard'
import './App.css';
import { Blockchain } from './utils/Blockchain';

function App() {
  
  return (
    <div className="container">
      <h1>LEEQUID Metrics</h1>
      <Dashboard blockchain={new Blockchain()}/>
    </div>
  );
}

export default App;
