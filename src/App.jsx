import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Productos from './sections/Productos/Productos';
import QuienesSomos from './sections/QuienesSomos/QuienesSomos';
import Galeria from './sections/Galeria/Galeria';
import Contacto from './sections/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <QuienesSomos />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;