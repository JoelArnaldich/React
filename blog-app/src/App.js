import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPosts from './components/BlogPost';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
 
function App() {
  const [user, setUser] = useState(null);
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPosts />} />
        <Route
          path="/admin"
          element={user ? <CreatePost user={user} /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}
 
export default App;
 