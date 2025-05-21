import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>

        <h1 className='mt-12 text-center text-xl md:text-2xl bg-vertclair md:mx-24 mx-2 md:mt-48 p-2 rounded-md shadow shadow-brunclair'>Connexion à votre compte</h1>
    <div className='border border-bluedark flex flex-col justify-center items-center bg-vertclair mx-5 md:mx-180 mt-12 md:mt-34 rounded-md shadow-md shadow-brunclair text-black p-5'>
      <form className='flex flex-col gap-5 items-center' action="/connexion" method="POST">
        <div className='flex flex-row justify-between w-full'>
          <label htmlFor="email">Email:</label>
          <input className='bg-base ms-2 rounded-md px-1' type="email" id="email" name="email" required />
        </div>
        <div className='flex flex-row justify-between w-full'>
          <label htmlFor="password">mot de passe:</label>
          <input className='bg-base ms-2 rounded-md px-1' type="password" id="password" name="password" required />
        </div>
        <button className="border border-orangevid mt-5 bg-base w-[160] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
          type="submit">se connecter</button>
      </form>
          </div>
          <div className='flex flex-col justify-center items-center w-full mt-5'>
          <Link className='text-center text-sm mt-5 text-black my-4' href="/inscription">Pas encore de compte ? <span className='text-blue-800 hover:text-orangevid'>Inscrivez-vous ici !</span></Link>
          <Link className='border text-xs text-center border-orangevid mt-5 bg-base w-[140] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer' href="/">Retour à l'accueil</Link>
          </div>
    </div>
  )
}

export default page
