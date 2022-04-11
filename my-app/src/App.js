
import './App.css';

function App() {

  const heading1 = "Mobile Operation System"
  const heading2 = "Mobile Manufacturers"

  const phone = ["Android", "BlackBerry", "iPhone", "Window Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">

      <Fun heading={heading1} item={phone} /> 
      <Fun heading={heading2} item={manufacturers} />

    </div>
  );
}


function Fun(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <ul>
        {props.item.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  )
};



export default App;
