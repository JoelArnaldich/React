import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <h1>Ejercicio 1: Botón que Muestra un Mensaje</h1>
      <MissatgeBotó />
      
      <h1>Ejercicio 2: Formulario de Bienvenida</h1>
      <FormulariBenvinguda />
      
      <h1>Ejercicio 3: Lista de Tareas</h1>
      <LlistaTasques />
      
      <h1>Ejercicio 4: Reloj de Conteo Regresivo</h1>
      <ComptadorReversa />
    </div>
  );
}


function MissatgeBotó() {
  const [mensaje, setMensaje] = useState("");

  function manejarClic() {
    setMensaje("Hola, usuari!");
  }

  return (
    <div>
      <button onClick={manejarClic}>Mostra Missatge</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}


function FormulariBenvinguda() {
  const [nombre, setNombre] = useState("");
  const [mensajeBienvenida, setMensajeBienvenida] = useState("");

  function manejarCambio(e) {
    setNombre(e.target.value);
  }

  function manejarEnvio(e) {
    e.preventDefault();
    setMensajeBienvenida(`Hola, ${nombre}!`);
  }

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <input 
          type="text" 
          value={nombre} 
          onChange={manejarCambio} 
          placeholder="Introduce tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensajeBienvenida && <p>{mensajeBienvenida}</p>}
    </div>
  );
}


function LlistaTasques() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function agregarTarea() {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  }

  function eliminarTarea(index) {
    setTareas(tareas.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Añadir tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul>
        {tareas.map((tarea, index) => (
          <li 
            key={index}
            style={{ color: 'black' }}
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            {tarea} 
            <button onClick={() => eliminarTarea(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


function ComptadorReversa() {
  const [contador, setContador] = useState(10);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (activo && contador > 0) {
      const intervalo = setInterval(() => {
        setContador((prevContador) => prevContador - 1);
      }, 1000);

      return () => clearInterval(intervalo);
    } else if (contador === 0) {
      setActivo(false);
    }
  }, [activo, contador]);

  function iniciarConteo() {
    setActivo(true);
    setContador(10); 
  }

  function detenerConteo() {
    setActivo(false);
  }

  return (
    <div>
      <p>Tiempo restante: {contador}</p>
      <button onClick={iniciarConteo}>Iniciar</button>
      <button onClick={detenerConteo}>Detener</button>
      {contador === 0 && <p>¡Tiempo acabado!</p>}
    </div>
  );
}

export default App;
