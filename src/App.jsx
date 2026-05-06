import './App.css'
import CheckoutPage from './Pages/CheckOut'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import OrderSuccess from './Pages/OrderScreen'


function App() {
  
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/order' element={<OrderSuccess/>} />

      </Routes>
    </>
  )
}

export default App
