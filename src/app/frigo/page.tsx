"use client"
import axios from 'axios'
import { useState } from 'react'

export default function Frigo() {
  const [ingredients, setIngredients] = useState('')
  const [frigo, setFrigo] = useState<string[]>([])
  const [error, setError] = useState('')

  const handleAddIngredient = async () => {
    if (!ingredients.trim()) return
    try {
      const response = await axios.post('http://localhost:4000/api/frigo', { // Remplace par l'URL de ton API
        ingredient: ingredients.trim(),
      })

      setFrigo(response.data.frigo)
      setIngredients('')
      setError('')
    } catch (err) {
      setError('Erreur lors de l’ajout de l’ingrédient')
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Mon Frigo</h1>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ajouter un ingrédient"
      />
      <button onClick={handleAddIngredient}>Ajouter</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {frigo.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}