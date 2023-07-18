// import logo from './logo.svg';
import './App.css';
import './Layout.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <aside className="Left">
        <Left />
      </aside>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
      <aside className="Right">
        <Right />
      </aside>
    </div>
  );
}

export default App;
