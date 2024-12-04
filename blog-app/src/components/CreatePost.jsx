import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
 
function CreatePost({ user }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        author: user.uid,
        createdAt: new Date(),
      });
      alert('Post creat amb èxit!');
      setTitle('');
      setContent('');
      navigate('/');
    } catch (error) {
      console.error('Error en crear el post:', error);
      alert('No s\'ha pogut crear el post.');
    }
  };
 
  return (
    <Container className="mt-5">
      <h2 className="text-center">Crear un Nou Post</h2>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Títol</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introdueix el títol"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contingut</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Introdueix el contingut"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button type="button" variant="secondary" onClick={() => navigate('/')}>
            Cancel·lar
          </Button>
          <Button type="submit" variant="success">Crear Post</Button>
        </div>
      </Form>
    </Container>
  );
}
 
export default CreatePost;