import './App.css';
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import Presention from "./components/Presention";

import aboutImage from "./images/about.png"
import aboutImage1 from "./images/download.png"
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Feature/>
      <About image={aboutImage} title="Comes With All You Need For Daily Life" button="GeT The App"/>
      <Presention/>
      <About image={aboutImage1} title="Download And Get The App Now" button="Download"/>
      <Contact/>    
     </div>
  );
}

export default App;
