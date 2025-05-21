import Image from 'next/image'
import React from 'react'
import CardRecette from '../components/CardRecette'

const page = () => {
  return (
    <div className="bg-white border border-orangevid rounded-xl min-h-screen m-3 md:m-12 flex flex-col">
      <div className="flex flex-col items-center justify-center h-full mt-2 md:mt-12">
        <h1 className="text-2xl md:text-4xl font-bold text-orangevid">Mes Recettes</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 p-4'>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
       <CardRecette/>
      </div>
    </div>
  )
}

export default page
