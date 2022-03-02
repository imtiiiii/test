import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Brands from './Components/Brands/Brands';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
    </div>
  );
}

export default App;
