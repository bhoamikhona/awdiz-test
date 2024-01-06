import logo from './logo.svg';
import './App.css';
import ReduxCounter from './redux/ReduxCounter';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider>
        
      <ReduxCounter/>
      </Provider>
    </div>
  );
}

export default App;
