// services/auth.ts
import axios from 'axios';

export async function login(email: string, password: string) {
  const response = await axios.post('http://localhost:8000/api/auth/login', {
    email,
    password,
  });

  const token = response.data.token;

  // Stocker le token dans localStorage
  localStorage.setItem('token', token);

  return token; // tu le renvoies pour l’utiliser ailleurs si besoin
}