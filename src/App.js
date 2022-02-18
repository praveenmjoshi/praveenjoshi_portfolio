import './App.css';

import Header from './pages/header/Header';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Contacts from './pages/contacts.js/Contacts';
import Recommendations from './pages/recommendations/Recommendations';
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recommendations />
        <Contacts />
    </main>
  );
}

export default App;
