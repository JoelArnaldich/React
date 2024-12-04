import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
    const [user, setUser] = useState(null);

    return (

        <Router>
            <Routes>
                <Route path="/" element={<BlogPosts />} />
                <Route path="/admin" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

