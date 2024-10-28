import React from 'react';
import './App.css';
import PostList from './components/PostList'; // Importem el component
 
function App() {
  return (
    <div className="App">
      <PostList /> {/* Mostrem la llista de publicacions */}
    </div>
  );
}
 
export default App;
 