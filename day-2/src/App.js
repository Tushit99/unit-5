import './App.css';
import logo from "./component/logo.png";

  function App() {
    return (
      <div className="App">
        <Logo path={logo} />
        <Links options={["Services","Projects","About"]} />
        <Button  />
      </div>
    );
  }
  
  const Logo = (props) => {
    return <img src={props.path}></img>
  }
  
  const Links = (props) => {
    return (
      <ul className="menu">
        {props.options.map((e) => {
          return <li className="options">{e}</li>
        })}
      </ul>
    )
  }
  
  const Button = () => {
    return <button className="btn">Contact</button>
  }

export default App;


