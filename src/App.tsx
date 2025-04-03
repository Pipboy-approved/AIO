import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Stage } from './components/Stage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Menu />
        <Stage />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App; 