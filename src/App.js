import logo from './logo.svg';
//import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Herosection from './Components/Herosection';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
<Herosection ></Herosection>
  </div>
  );
}

export default App;
