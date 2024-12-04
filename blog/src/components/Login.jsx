import React, { useState, useContext } from 'react'; // Afegir useContext
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Importar el context

function Login() {
    const { setUser } = useContext(UserContext); // Obtenir setUser del context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user); // Establir l'usuari al context
                navigate('/admin'); // Redirigir a l'àrea privada
            })
            .catch((error) => {
                console.error('Error en iniciar sessió:', error);
                alert('Correu o contrasenya incorrectes.');
            });
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar Sessió</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Correu Electrònic</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Introdueix el teu correu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contrasenya</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Introdueix la teva contrasenya"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Iniciar Sessió</Button>
            </Form>
        </div>
    );
}

export default Login;
