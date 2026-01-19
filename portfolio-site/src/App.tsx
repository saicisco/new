import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
