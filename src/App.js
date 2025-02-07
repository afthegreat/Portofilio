import logo from './logo.svg';
//import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Herosection from './Components/Herosection';
import Services from './Components/Services';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Services></Services>
<Herosection ></Herosection>
  </div>
  );
}

export default App;
