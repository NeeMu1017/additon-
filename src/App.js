import logo from './logo.svg';
import './App.css';
import Argument from './compont/ClassInProps';
import CountNumer from './compont/CountNumber';
import LifeCycel from './compont/Lifecikel';
import Counter from './compont/Hook';
import State from './compont/Usesate';
import HookReucer from './compont/Usereducer';

function App() {
  return (
    <div>
      
      <State/>
      <h2>reduce</h2>
      <HookReucer/>
    </div>
  );
}

export default App;
