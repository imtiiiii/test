import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Brands from './Components/Brands/Brands';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Services />
    </div>
  );
}

export default App;
