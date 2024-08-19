
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './register/register'
import VerifyAccount from './register/verify-account'
import Login from './login/login'
import OutletRouter from './register/outlet'
import ForgotPassword from './forgot-password/forgot-password'
import ResetPassword from './forgot-password/reset-password'
import UrlShortener from './home'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<OutletRouter/>}> 
            <Route index element={<Register/>}></Route>
            <Route path='verify-account/:token' element={<VerifyAccount/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
          <Route path='/home/:email' element={<UrlShortener/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
