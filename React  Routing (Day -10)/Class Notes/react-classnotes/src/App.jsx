import logo from './logo.svg';
import './App.css';
import { About } from './components/about';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
