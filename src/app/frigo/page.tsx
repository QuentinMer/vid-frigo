"use client"
import axios from 'axios'
import Link from 'next/link'
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
        <div className="bg-white border border-orangevid rounded-xl min-h-screen m-3 md:m-12 flex flex-col">
            <h1 className="text-xl md:text-4xl font-bold text-orangevid text-center mt-2 md:mt-12">Mon frigo</h1>
            <div className='flex flex-col items-center justify-center mt-4 md:mt-24'>

      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
        placeholder="Ajouter un ingrédient"
        />
      <button 
          className="cursor-pointer mt-3 md:mt-12 border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md text-black hover:bg-orangevid hover:text-white active:shadow-none"
      onClick={handleAddIngredient}>Ajouter</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

      <ul>
        {frigo.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className='flex flex-col items-center justify-center'>

      <Link
          href="/"
          className="border text-xs text-center border-orangevid mt-5 bg-base w-[140] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
          >
          Retour à l'accueil
        </Link>
          </div>
    </div>
  )
}