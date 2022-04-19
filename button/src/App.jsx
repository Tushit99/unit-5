import { useState } from "react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  // const [count, setCount] = useState(0); 
  const [theam , setCount] = useState("dark")

  return (
    <div className="App">
      <h3> count</h3>
      <Button> click me </Button>
      <Button children={"sign in"} />
      <Button
        onClick={() => {
          alert("you clicked me");
        }}
      >
        power
      </Button>

        <Button onClick={()=>{
          setTheame(theam ===  "light" ? "dark" : "light")
        }}> change theam</Button>

    </div>
  );
}

export default App;
