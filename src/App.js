import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Brands from './Components/Brands/Brands';
import Services from './Components/Services/Services';
import Processes from './Components/Processes/Processes';
import PastProjects from './Components/PastProjects/PastProjects';
import Feature from './Components/Features/Feature';
import Features from './Components/Features/Features';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Brands />
      <Services />
      <About />
      <Processes />
      <PastProjects />
      <Features></Features>
      <Blogs />
    </div>
  );
}

export default App;
