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
      console.error('[❌ Erreur]', err)
      setRecette("Une erreur s'est produite.")
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
      alert('Recette enregistrée ✅')
    } catch (err) {
      console.error('[❌ Enregistrement échoué]', err)
      alert('Erreur lors de l’enregistrement.')
    }
  }

  return (
    <div className='mx-2 md:mx-24 text-center md:text-left md:mt-24 mt-2'>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-lg font-bold">
          Ingrédients (séparés par des virgules) :
        </label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="ex: tomates, poisson, ail"
        />
        <button
          type="submit"
          className="border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md text-black hover:bg-orangevid hover:text-white active:shadow-none"
          disabled={loading}
        >
          {loading ? 'Génération...' : 'Générer une recette'}
        </button>
      </form>

      {recette && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Recette générée :</h2>
          <p className='border mx-3 md:mx-50 bg-vertclair p-6 rounded-md shadow-xl'>{recette}</p>

          {session ? (
            <button
              onClick={handleSave}
              className="mt-4 bg-orangevid text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Enregistrer la recette
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="mt-4 bg-slate-400 text-white px-4 py-2 rounded hover:bg-slate-600"
            >
              Se connecter pour enregistrer
            </button>
          )}
        </div>
      )}
    </div>
  )
}