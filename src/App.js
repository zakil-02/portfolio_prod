import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EducationComponent } from './components/TelecomEducation.js';
import { Experience } from './components/Experience.js';
import { Loader } from './components/Loader.js';
import { Interests } from './components/Interests.js';
import TechStack from './components/TechStack.js';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <main>
            <Banner />
            <EducationComponent />
            <Experience />
            <Projects />
            <TechStack />
            <Interests />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
