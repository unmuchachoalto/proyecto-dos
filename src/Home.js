import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  // Navega a la página anterior
  };

  return (
    <div>
      <h4>Página de Inicio Home</h4>
      <Button variant="contained" onClick={goBack}>
        Black
      </Button>
    </div>
  );
}

  export default Home;