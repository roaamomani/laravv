import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Register from './components/Register/Register';
import Login from './components/login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/Dashboard/dashboard';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Home from './components/landingpage/Home';
import UsersTable from './components/Users/Users';
import Contacts from './components/Contact/Contact';
import Unauthorized from './components/unauthorized/unauthorized';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <div id="wrapper">
            <div id="content-wrapper">
                <Routes>
                    {/* Public Routes */}
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />

                    {/* Protected Routes */}
                    <Route path="/forgotpassword" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
                    <Route path='/changepassword' element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/' element={<Home />} />
                    
                    {/* Admin Protected Routes */}
                    <Route path='/dashboard' element={<ProtectedRoute requiredRole="admin"><Dashboard /></ProtectedRoute>} />
                    <Route path="/users" element={<ProtectedRoute requiredRole="admin"><UsersTable /></ProtectedRoute>} />
                    <Route path="/contacts" element={<ProtectedRoute requiredRole="admin"><Contacts /></ProtectedRoute>} />

                    {/* Catch-all Route for 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
