import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import CounterButton from './components/CounterButton';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <CounterButton/>
    </div>
  );
}

export default App;
