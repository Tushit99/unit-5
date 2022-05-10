import { createContext, useState } from 'react'

export const LangContext = createContext()

export const LangContextProvide = ({ children }) => {
  const [lang, setLang] = useState('en')
  const handleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  }
  return (
    <LangContext.Provider value={{ lang, handleLang }}>
      {children}
    </LangContext.Provider>
  )
}
