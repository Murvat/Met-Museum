import './App.css';
import Contact from './pages/ContactForm';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { NotFound } from './pages/NotFound';
import { useSelector } from 'react-redux';
import { selectUser } from './feauters/auth/authSlice'; // Ensure this path is correct

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector(selectUser); // Get the user's surname from Redux store

  // Redirect to login page if user is not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content
};
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* Catch-All Route for 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;