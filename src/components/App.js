import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}


/* write an <About> component here */




function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */
      <Home />
      }
      {/* add your <About> component here */
      <About />}
    </div>
  );
}

export default App;
