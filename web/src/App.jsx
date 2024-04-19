import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login.jsx'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard.jsx'
import Home from './Components/Home.jsx'
import Logout from './Components/Logout.jsx'
import Employee from './Components/Employee.jsx'
import Payment from './Components/Payment.jsx'
import AddCategory from './Components/AddCategory.jsx'
import Category from './Components/Category.jsx'
import AddEmployee from './Components/AddEmployee.jsx'
function App() {
  

  return (
   <>
    <Router>
      <Routes>
          <Route path='/adminlogin' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/employee' element={<Employee/>}></Route>
          <Route path='/dashboard/payment' element={<Payment/>}></Route>
          <Route path='/dashboard/logout' element={<Logout />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
        </Route>
      </Routes>
    </Router>
   </>
  )
}

export default App
