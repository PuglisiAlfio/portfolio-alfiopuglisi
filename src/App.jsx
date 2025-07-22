import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Features from "./components/Features.jsx";
import About from "./components/About.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-animated-gradient min-h-screen">
      <Navbar />
      <section id="home" className="flex items-center justify-center">
        <Header />
      </section>
      <section
        id="features"
        className="min-h-screen flex items-center justify-center"
      >
        <Features />
      </section>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>
      <section
        id="stacks"
        className="min-h-screen flex items-center justify-center"
      >
        <Stack />
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
