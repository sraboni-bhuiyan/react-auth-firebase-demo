import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Users from './Component/Users/Users';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import UserInfo from './Component/UserInfo/UserInfo';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/user/:userId' element={<UserInfo></UserInfo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
