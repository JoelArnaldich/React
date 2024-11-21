import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await signup(email, password);
      setSuccess('Usuari registrat amb èxit!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Registra't</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Correu electrònic</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introdueix el teu correu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group id="password" className="mt-3">
            <Form.Label>Contrasenya</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introdueix la teva contrasenya"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="w-100 mt-4" variant="primary">
            Registrar-se
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;

