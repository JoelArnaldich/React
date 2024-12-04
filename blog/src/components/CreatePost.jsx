import { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig.js';
import { UserContext } from '../context/UserContext.jsx';


function CreatePost() {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Nacional'); // Categoria per defecte
    const [message, setMessage] = useState(null);

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            setMessage({ type: 'danger', text: 'Por favor, completa todos los campos.' });
            return;
        }

        try {
            await addDoc(collection(db, 'posts'), {
                title,
                content,
                category, // Afegim la categoria
                author: user.email,
                createdAt: new Date(),
            });

            setMessage({ type: 'success', text: '¡Post creado con éxito!' });
            setTitle('');
            setContent('');
            setCategory('Nacional'); // Restablir categoria
        } catch (error) {
            console.error('Error al crear el post:', error);
            setMessage({ type: 'danger', text: 'Hubo un error al crear el post. Inténtalo de nuevo.' });
        }
    };

    return (
        <Container className="mt-5">
            <h2>Crear un nuevo post</h2>
            {message && <Alert variant={message.type}>{message.text}</Alert>}
            <Form onSubmit={handlePostSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Introduce el título del post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contenido</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Escribe el contenido del post"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                        <option value="Deportes">Deportes</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" variant="primary">Publicar Post</Button>
            </Form>
        </Container>
    );
}

export default CreatePost;
