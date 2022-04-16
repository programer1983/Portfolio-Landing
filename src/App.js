import './App.css';
import Header from "./components/home/header/Header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePages from './components/pageContent/HomePages';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePages/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
