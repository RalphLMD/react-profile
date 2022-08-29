import './App.css';


import Particle from './components/Particles';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

const App = () => {
  return (
    <Router>
         <Particle/> {/* Background */}
         <Home/>
    </Router>
  );
}

export default App;
