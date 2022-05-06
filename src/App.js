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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/shared/footer/Footer';
import ManagementInventories from './components/pages/Manage MentInventories/ManagementInventories';
import Quantity from './components/pages/Quantity/Quantity';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addItems" element={<RequireAuth>
          <AddItems />
        </RequireAuth>} />
        <Route path="/myItems" element={<RequireAuth>
          <MyItems />
        </RequireAuth>} />
        <Route path="/managementInventories/:id" element={<RequireAuth>
          <ManagementInventories/>
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
