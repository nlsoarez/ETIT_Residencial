import React, { useEffect } from "react";
import app from "./firebaseConfig"; // Importa a configuração do Firebase

function App() {
  useEffect(() => {
    console.log("Firebase carregado:", app);
  }, []);

  return (
    <div className="App">
      <h1>Portal de Escalonamento</h1>
      <p>O Firebase foi inicializado com sucesso! 🚀</p>
    </div>
  );
}

export default App;
