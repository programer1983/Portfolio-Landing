import './App.css';
import Header from "./components/home/header/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePages from './components/pageContent/HomePages';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePages/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
