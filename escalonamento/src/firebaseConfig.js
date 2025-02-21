// Importa a função para inicializar o Firebase
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQqqI6DOo7ksXJAbJ2Ey2mu7a0EKQSF9U",
  authDomain: "escalonamento-5e5fb.firebaseapp.com",
  projectId: "escalonamento-5e5fb",
  storageBucket: "escalonamento-5e5fb.appspot.com", // Corrigido para ".appspot.com"
  messagingSenderId: "993341838416",
  appId: "1:993341838416:web:6bfd8a374d06b0dee62d55"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firebase para ser usado em outros arquivos
export default app;
