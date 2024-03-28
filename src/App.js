import Navbar from "./navbar";
import Introduction from "./introduction";
import Details from "./details";
import Benifits from "./benifits";
import Marquee from "./marquee";
import Work from "./works";
import Casestudy from "./casestudy";
import Clientstudy from "./client";
import Contact from "./contact";
import Features from "./features";


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Introduction/>
      <Details/>
      <Features/>
      <Benifits/>
      <Marquee/>
      <Work/>
      <Casestudy/>
      <Clientstudy/>
      <Contact/>
      
    </div>
  );
}

export default App;
