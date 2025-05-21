'use client'

import { useState } from 'react'

export default function RecetteForm() {
  const [ingredients, setIngredients] = useState('')
  const [loading, setLoading] = useState(false)
  const [recette, setRecette] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setRecette('')

    try {
      const response = await fetch('/api/recette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredients.split(',').map((i) => i.trim()),
        }),
      })

      const data = await response.json()
      console.log('[📥 Réponse API]', data)

      if (data.error) {
        setRecette(`Erreur côté serveur : ${data.error}`)
      } else {
        setRecette(data.recipe)
      }
    } catch (err) {
      console.error('[❌ Erreur réseau]', err)
      setRecette("Une erreur s'est produite lors de la communication avec le serveur.")
    } finally {
      setLoading(false)
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
        placeholder="ex: tomates, pâtes, ail"
        />
      <button
        type="submit"
        className="border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
        disabled={loading}
        >
        {loading ? 'Génération...' : 'Générer une recette'}
      </button>

      {recette && (
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Recette générée :</h2>
          <p className='border mx-3 md:mx-50 bg-vertclair p-6 rounded-md shadow-xl shadow-brunclair'>{recette}</p>
        </div>
      )}
    </form>
      </div>
  )
}