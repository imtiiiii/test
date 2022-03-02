import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Brands from './Components/Brands/Brands';
import Services from './Components/Services/Services';
import Processes from './Components/Processes/Processes';
import PastProjects from './Components/PastProjects/PastProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Services />
      <Processes />
      <PastProjects />
    </div>
  );
}

export default App;
