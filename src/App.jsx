
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Dashboard from './pages/admin/dashboard';
import CategoryPage from './pages/admin/categories';
import UsersPage from './pages/admin/users';
import AdminLayout from './layout/admin layout/AdminLayout';
import LoginPage from './pages/public/login/LoginPage';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function App() {
const { isAuthenticated, role } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {isAuthenticated && role === "admin" ? (
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="users" element={<UsersPage />} />
            
          </Route>
         ) : <Route path="login" element={<LoginPage />} />}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App
