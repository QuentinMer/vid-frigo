import Image from 'next/image'
import React from 'react'

const CardRecette = () => {
  return (
     <div className="mt-2 md:mt-12 max-w-md border border-orangevid rounded-xl overflow-hidden shadow-lg">
          <Image
            className="w-full h-64 object-cover"
            src="/assets/img/poulet-curry.jpg"
            width={400}
            height={400}
            alt="image recette"
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-xl md:text-xl font-bold text-orangevid text-center">Poulet au curry</h2>
            <p className="text-sm md:text-lg text-gray-700">
              Un plat savoureux et épicé, parfait pour les amateurs de curry.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Ingrédients : Poulet, curry, lait de coco, oignons, ail.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              Préparation : Faire revenir le poulet, ajouter les épices, cuire à feu doux.
            </p>
            <p className="text-sm md:text-lg text-gray-700">Temps de cuisson : 30 minutes</p>
            <p className="text-sm md:text-lg text-gray-700">Temps de préparation : 15 minutes</p>
          </div>
        </div>
  )
}

export default CardRecette
