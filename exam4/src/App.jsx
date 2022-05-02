import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {
 const auth = false;
  return (
    <div className="App">
      <div className="box">
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {auth ? <Link className="nav-logout" to="/logout">
          Logout
        </Link> : <Link className="nav-login" to="/login">
          Login
        </Link> }
      </div>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/login' element= {<Login/>}></Route>
        <Route path='/logout' element= {<Logout/>}></Route>
        <Route path='/orders' element= {<Orders/>}></Route>
        <Route path='/neworder' element= {<NewOrder/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;