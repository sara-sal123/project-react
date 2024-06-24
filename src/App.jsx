
import { Outlet } from 'react-router-dom'
import './App.css'
import AdminPage from './component/admin/AdminPage'
import User from './component/user/User'

function App() {
 

  return (
    <>
      <User/>
      <Outlet/>
    </>
  )
}

export default App
