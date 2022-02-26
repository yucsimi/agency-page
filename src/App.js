import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './componentes/Navbar';
import Header from './componentes/Header';
import Seccion1 from './componentes/Seccion1';
import Seccion2 from './componentes/Seccion2';
import Seccion3 from './componentes/Seccion3';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Footer />
    </div>
  );
}

export default App;
