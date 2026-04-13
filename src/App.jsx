import './App.css'
import CheckoutPage from './Pages/CheckOut'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        
        <Route path='/checkout' element={<CheckoutPage />} />

      </Routes>
    </>
  )
}

export default App
