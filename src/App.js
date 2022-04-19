import './App.css';
import Header from "./components/home/header/Header"
import Pages from "./components/pages/Pages"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePages from './components/pageContent/HomePages';
import Footer from './components/home/Footer';
import Blog from './components/pages/Blog';
import Portfolio from './components/pages/Portfolio';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePages/>} />
        <Route path='/pages' exact element={<Pages/>} />
        <Route path='/blog' exact element={<Blog/>} />
        <Route path='/portfolio' exact element={<Portfolio/>} />
        <Route path='/shop' exact element={<Shop/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
