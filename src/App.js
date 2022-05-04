import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/pages/Add Items/AddItems';
import Blog from './components/pages/Blog/Blog';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import MyItems from './components/pages/My Items/MyItems';
import NotFound from './components/pages/NotFound/NotFound';
import Navbar from './components/shared/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
