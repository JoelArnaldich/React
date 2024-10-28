import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [editingId, setEditingId] = useState(null); // Para saber si estamos editando
  // Cargar estudiantes al montar el componente
  useEffect(() => {
    obtenerEstudiantes();
  }, []);
  // Función para obtener la lista de estudiantes
  const obtenerEstudiantes = () => {
    axios.get('http://localhost:5000/api/estudiantes')
      .then(response => {
        setEstudiantes(response.data);
      })
      .catch(error => {
        console.error('Error obteniendo los estudiantes', error);
      });
  };
  // Función para añadir un nuevo estudiante
  const añadirEstudiante = () => {
    axios.post('http://localhost:5000/api/estudiantes', { nombre, edad })
      .then(() => {
        obtenerEstudiantes();
        setNombre('');
        setEdad('');
      })
      .catch(error => {
        console.error('Error añadiendo estudiante', error);
      });
  };
  // Función para eliminar un estudiante
  const eliminarEstudiante = (id) => {
    axios.delete(`http://localhost:5000/api/estudiantes/${id}`)
      .then(() => {
        obtenerEstudiantes();
      })
      .catch(error => {
        console.error('Error eliminando estudiante', error);
      });
  };
  // Función para modificar un estudiante
  const modificarEstudiante = () => {
    axios.put(`http://localhost:5000/api/estudiantes/${editingId}`, { nombre, edad })
      .then(() => {
        obtenerEstudiantes();
        setNombre('');
        setEdad('');
        setEditingId(null); // Salir del modo edición
      })
      .catch(error => {
        console.error('Error modificando estudiante', error);
      });
  };
  // Manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (editingId) {
      modificarEstudiante();
    } else {
      añadirEstudiante();
    }
  };
  // Seleccionar un estudiante para modificar
  const seleccionarParaModificar = (estudiante) => {
    setNombre(estudiante.nombre);
    setEdad(estudiante.edad);
    setEditingId(estudiante.id);
  };
  return (
    <div className="App">
      <h1>Lista de Estudiantes</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <button type="submit">
          {editingId ? 'Modificar Estudiante' : 'Añadir Estudiante'}
        </button>
      </form>

      <ul>
        {estudiantes.map(estudiante => (
          <li key={estudiante.id}>
            {estudiante.nombre} - {estudiante.edad} años
            <button onClick={() => seleccionarParaModificar(estudiante)}>Modificar</button>
            <button onClick={() => eliminarEstudiante(estudiante.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;