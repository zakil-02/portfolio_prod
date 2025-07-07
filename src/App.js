import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ProgrammingLanguages from './components/prgL';
import Softwares from './components/Software';
import { EducationComponent } from './components/TelecomEducation.js';
import { Experience } from './components/Experience.js';
import { Loader } from './components/Loader.js';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Reduced loading time from 5 to 3 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Banner />
          <ProgrammingLanguages/>
          <Softwares/>
          <EducationComponent />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
      
    </div>
  );
}

export default App;
