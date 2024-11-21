import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap para estilos generales
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, Select, MenuItem, FormControlLabel, Alert } from '@mui/material';
import { Container } from '@mui/material';

const Formulari = () => {
  // Definim els estats per als camps del formulari
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [genere, setGenere] = useState('');
  const [acceptaCondicions, setAcceptaCondicions] = useState(false);

  // Estats per al missatge de confirmació i errors
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [nomError, setNomError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Funció per a gestionar el canvi en els camps del formulari
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAcceptaCondicions(checked);
    } else {
      if (name === 'nom') setNom(value);
      if (name === 'email') setEmail(value);
      if (name === 'genere') setGenere(value);
    }
  };

  // Funció per a gestionar el reset del formulari
  const handleReset = () => {
    setNom('');
    setEmail('');
    setGenere('');
    setAcceptaCondicions(false);
    setNomError('');
    setEmailError('');
  };

  // Funció per a gestionar l'enviament del formulari
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar els camps
    let formIsValid = true;

    if (nom.trim() === '') {
      setNomError('El nom és obligatori');
      formIsValid = false;
    } else {
      setNomError('');
    }

    if (email.trim() === '' || !email.includes('@')) {
      setEmailError('El correu electrònic és obligatori i ha de tenir un @');
      formIsValid = false;
    } else {
      setEmailError('');
    }

    if (formIsValid) {
      // Aquí pots afegir la lògica per processar les dades, per exemple, enviant-les a una API
      alert(`Nom: ${nom}, Email: ${email}, Gènere: ${genere}, Accepta Condicions: ${acceptaCondicions}`);

      // Mostrar el missatge de confirmació
      setShowConfirmation(true);

      // Ocultar el missatge després de 3 segons
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  };

  return (
    <Container className="mt-5">
      {/* Mostrar missatge de confirmació si showConfirmation és true */}
      {showConfirmation && (
        <Alert severity="success" className="mb-4">
          Formulari enviat amb èxit
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <TextField
            label="Nom"
            name="nom"
            variant="outlined"
            fullWidth
            value={nom}
            onChange={handleChange}
            error={!!nomError}
            helperText={nomError}
            className="mb-3"
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
            className="mb-3"
          />
        </div>
        <div className="mb-3">
          <FormControl fullWidth variant="outlined" className="mb-3">
            <InputLabel>Gènere</InputLabel>
            <Select
              name="genere"
              value={genere}
              onChange={handleChange}
              label="Gènere"
            >
              <MenuItem value="">
                <em>Selecciona...</em>
              </MenuItem>
              <MenuItem value="home">Home</MenuItem>
              <MenuItem value="dona">Dona</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-3">
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptaCondicions}
                onChange={handleChange}
                name="acceptaCondicions"
              />
            }
            label="Accepto les condicions"
          />
        </div>
        <div className="d-flex justify-content-between">
          {/* Botó Enviar */}
          <Button type="submit" variant="contained" color="primary" className="w-45">
            Enviar
          </Button>
          {/* Botó Netejar */}
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            className="w-45"
          >
            Netejar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Formulari;
