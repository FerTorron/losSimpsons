import './App.css'
import PersonajesContext from './Components/PersonajesContext/PersonajesContext'
import PersonajeInfoContainer from './Components/PersonajeInfoContainer/PersonajeInfoContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header className='flex items-center justify-center w-full'>
        <h1 className='fon text-3xl mt-5 text-white font-medium'>🍩 The Simpsons 🍩</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PersonajesContext />} />
          <Route path='/personaje/:idPj' element={<PersonajeInfoContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
