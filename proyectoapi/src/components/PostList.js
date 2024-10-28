import React, { useState, useEffect } from 'react';
 
function PostList() {
  const [posts, setPosts] = useState([]); // Estat per desar les dades de l'API
  const [loading, setLoading] = useState(true); // Estat per mostrar que s'estan carregant les dades
  const [error, setError] = useState(null); // Estat per gestionar errors
 
  // useEffect per fer la petició quan el component es munta
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en carregar les dades'); // Si hi ha un error en la resposta
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data); // Actualitzem l'estat amb les dades de l'API
        setLoading(false); // Deixem de mostrar el missatge de càrrega
      })
      .catch((error) => {
        setError(error.message); // Actualitzem l'estat amb l'error
        setLoading(false);
      });
  }, []); // La dependència buida [] assegura que només s'executi una vegada al muntatge
 
  // Renderització condicional per mostrar l'estat de càrrega, error o les dades
  if (loading) {
    return <p>Carregant dades...</p>;
  }
 
  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
    <div>
      <h1>Llista de Publicacions</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default PostList;