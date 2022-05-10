import { useContext } from 'react'
import './App.css'
import { Card } from './components/Body/card'
import { Navbar } from './components/navbar'
import { LangContext } from './contexts/LanguageContext'

function App() {
  const {handleLang} = useContext(LangContext);
  return (
    <div className="App">
      <button onClick={()=>{
        handleLang();
      }}>Change Language</button>
      <Navbar></Navbar>
      <Card></Card>
    </div>
  )
}

export default App
