 
import './App.css';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Firstpage from './Components/Firstpage';
import Output from './Components/Output';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Firstpage />} />
        <Route exact path='/Output' element={<Output />} />
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
