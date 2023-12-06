import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
