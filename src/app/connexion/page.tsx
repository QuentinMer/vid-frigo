'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log("Réponse complète de l'API :", data);


      if (response.ok) {
        console.log("Token reçu :", data.token);
        localStorage.setItem('token', data.token)
        console.log("Token stocké :", localStorage.getItem("token"));
        router.push('/recette') // Redirection si login réussi
      } else {
        setError(data.message || 'Identifiants incorrects')
      }
    } catch (err) {
      setError('Erreur lors de la connexion.')
      console.log(err);
      
    }
  }


  return (
    <div>
      <h1 className="mt-12 text-center text-xl md:text-2xl bg-vertclair md:mx-24 mx-2 md:mt-12 xl:mt-40 p-2 rounded-md shadow shadow-brunclair">
        Connexion à votre compte
      </h1>
      <div className="border border-bluedark flex flex-col justify-center items-center bg-vertclair mx-5 md:mx-60 xl:mx-120 mt-12 md:mt-24 xl:mt-24 rounded-md shadow-md shadow-brunclair text-black p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
          <div className="flex flex-row justify-between w-full">
            <label htmlFor="email">Email:</label>
            <input
              className="bg-base ms-2 rounded-md px-1"
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <label htmlFor="password">Mot de passe:</label>
            <input
              className="bg-base ms-2 rounded-md px-1"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="border border-orangevid mt-5 bg-base w-[160] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
          >
            Se connecter
          </button>
        </form>
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-5">
        <Link href="/inscription" className="text-center text-sm mt-5 text-black my-4">
          Pas encore de compte ? <span className="text-blue-800 hover:text-orangevid">Inscrivez-vous ici !</span>
        </Link>
        <Link
          href="/"
          className="border text-xs text-center border-orangevid mt-5 bg-base w-[140] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
        >
          {`Retour à l'accueil`}
        </Link>
      </div>
    </div>
  )
}

export default Page