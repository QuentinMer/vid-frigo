'use client'

import { useState } from 'react'
import {  signIn, useSession } from 'next-auth/react'
import axios from 'axios'

export default function RecetteForm() {
  const { data: session } = useSession()
  const [ingredients, setIngredients] = useState('')
  const [loading, setLoading] = useState(false)
  const [recette, setRecette] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setRecette('')

    try {
      const response = await axios.post('/api/recette', {
        ingredients: ingredients.split(',').map((i) => i.trim()),
      })
      setRecette(response.data.recipe)
    } catch (err) {
      setRecette("Une erreur s'est produite.")
      console.log(err);
      
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!session) return signIn()

    try {
      const response = await axios.post('/api/save-recipe', {
        recipe: recette,
        
      })
      console.log(response);
      alert('Recette enregistrée ')
    } catch (err) {
      alert('Erreur lors de l’enregistrement.')
      console.log(err);
      
    }
  }

  return (
    <div className='mx-2 md:mx-24 text-center md:text-left md:mt-24 mt-2'>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center justify-center">
        <label className="block text-lg font-bold">
          Ingrédients (séparés par des virgules) :
        </label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
          placeholder="ex: tomates, poisson, ail"
        />
        <button
          type="submit"
          className="cursor-pointer border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md text-black hover:bg-orangevid hover:text-white active:shadow-none"
          disabled={loading}
        >
          {loading ? 'Génération...' : 'Générer une recette'}
        </button>
      </form>

      {recette && (
        <div className="mt-2 justify-center items-center flex flex-col">
          {session ? (
            <button
              onClick={handleSave}
              className="cursor-pointer mt-4 bg-orangevid text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Enregistrer la recette
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="cursor-pointer border border-orangevid my-2 md:my-6 bg-base w-[200] px-2 py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
            >
              Se connecter pour enregistrer
            </button>
          )}
          <h2 className="text-xl font-semibold my-2 md:mb-12">Recette générée :</h2>
          <p className='border mx-3 md:mx-50 bg-vertclair p-6 rounded-md shadow-xl'>{recette}</p>

        </div>
      )}
   
    </div>
  )
}