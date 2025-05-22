'use client'

import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import CardRecette from '../components/CardRecette'

export default function PageRecettes() {
  const { data: session, status } = useSession()

  return (
    <div className="bg-white border border-orangevid rounded-xl min-h-screen m-3 md:m-12 flex flex-col">
      <div className="flex flex-col items-center justify-center h-full mt-2 md:mt-12">
        <h1 className="text-2xl md:text-4xl font-bold text-orangevid">
          Mes Recettes
        </h1>
      </div>
      {status === 'loading' && (
        <p className="text-center mt-8">Chargement...</p>
      )}
      
      {session ? (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
          <CardRecette />
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="mb-4">Veuillez vous connecter pour voir vos recettes sauvegardées.</p>
          <button
            onClick={() => signIn()}
            className="border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
          >
            Se connecter
          </button>
        </div>
      )}
    </div>
  )
}