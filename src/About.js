import React, { useState } from 'react';
import { Button } from '@mui/material';

function About() {
  const [data, setData] = useState([]);

  async function getData() {
    const url = "https://dummyjson.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }

      const json = await response.json();
      setData(json.todos);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <Button variant='contained' onClick={getData} style={{ marginBottom: '20px' }}>
        Obtener datos
      </Button>

      {data.length > 0 ? (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              {todo.id}. {todo.todo} - <strong>{todo.completed ? 'Completado' : 'Pendiente'}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
}

export default About;
