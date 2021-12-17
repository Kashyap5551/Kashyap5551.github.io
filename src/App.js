import React, { Component } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ScrollToTop } from "./components/ScrollToTop";


class App extends Component {

  render() {
    return (
      <div className="App">
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <ScrollToTop />
        </main>
      </div>
    );
  }
}

export default App;