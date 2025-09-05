import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Router
        basename='/yummio'
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header />
        <main className='content container'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
