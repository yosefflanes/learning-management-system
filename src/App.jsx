import Contact from './components/section/Contact';
import Feature from './components/section/Feature';
import HeroSection from './components/section/HeroSection';
import Navbar from './components/section/Navbar'
import WhyChooseUs from './components/section/WhyChooseUs';

function App() {
  

  return (
    <main>
      <header id='navbar-section'>
        <Navbar />
      </header>
      <section id='hero-section'>
        <HeroSection />
      </section>
      <section id='about-us-section'>
        <WhyChooseUs />
      </section>
      <section id='feature-section'>
        <Feature />
      </section>
      <footer id='contact-us'>
        <Contact />
      </footer>
    </main>
  )
}

export default App;
