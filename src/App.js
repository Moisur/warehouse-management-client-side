import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/pages/Add Items/AddItems';
import Blog from './components/pages/Blog/Blog';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import MyItems from './components/pages/My Items/MyItems';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';
import Navbar from './components/shared/Navbar/Navbar';
import RequireAuth from './RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addItems" element={<RequireAuth>
          <AddItems/>
        </RequireAuth>} />
        <Route path="/myItems" element={<RequireAuth>
          <MyItems />
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
