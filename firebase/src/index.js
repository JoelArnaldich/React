import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Estilos globales
import App from './App';  // El componente principal de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css';  // Importar estilos de Bootstrap
import { UserProvider } from './context/UserContext';  // Importar el contexto de usuario si lo usas


// Obtener el contenedor raíz en el HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <UserProvider>  {/* Proveedor del contexto de usuario */}
      <App />  {/* El componente principal de la aplicación */}
    </UserProvider>
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu app, pasa una función para registrar los resultados (opcional)
