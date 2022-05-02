
import './App.css';
import { About } from './components/about';
import { Home } from './components/home';
import {Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar';
import { Product } from './components/product';

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About /> */}
      <Navbar />{" "}
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/product/:id"} element={<Product />}></Route>
      </Routes>

    </div>
  )
}

export default App
