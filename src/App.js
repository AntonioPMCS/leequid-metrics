import Dashboard from './components/Dashboard'
import './App.css';
import { Blockchain } from './utils/Blockchain';

function App() {
  
  return (
    <div className="container">
      <h1>Welcome to the LEEQUID Metrics Page</h1>
      <Dashboard blockchain={new Blockchain()}/>
    </div>
  );
}

export default App;
