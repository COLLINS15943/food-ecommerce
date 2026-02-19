import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="app-container">
          <Header />
          <Hero />
          <Menu />
          <AppDownload />
        </div>
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
