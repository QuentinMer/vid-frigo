'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')

    if (form.password !== form.confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas')
      return
    }

    try {
      const res = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setMessage(data.message || 'Erreur lors de l\'inscription')
      } else {
        setMessage('Inscription réussie !')
        setForm({ name: '', email: '', password: '', confirmPassword: '' })
      }
    } catch (err) {
      setMessage('Erreur réseau')
      console.log(err);

    }
  }

  return (
    <div>
      <h1 className='mt-12 text-center text-xl md:text-2xl bg-vertclair md:mx-24 mx-2 md:mt-48 p-2 rounded-md shadow shadow-brunclair'>
        {`Créez votre compte Vid'frigo`}
      </h1>
      <div className='border border-bluedark flex flex-col justify-center items-center bg-vertclair mx-5 md:mx-140 mt-12 md:mt-34 rounded-md shadow-md shadow-brunclair text-black p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 items-center w-full max-w-md'>
          <div className='flex flex-row justify-between w-full'>
            <label htmlFor="name">Nom:</label>
            <input
              className='bg-base ms-2 rounded-md px-1 flex-grow'
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-between w-full'>
            <label htmlFor="email">Email:</label>
            <input
              className='bg-base ms-2 rounded-md px-1 flex-grow'
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-between w-full'>
            <label htmlFor="password">Mot de passe:</label>
            <input
              className='bg-base ms-2 rounded-md px-1 flex-grow'
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-between w-full'>
            <label htmlFor="confirmPassword">Confirmer mot de passe:</label>
            <input
              className='bg-base ms-2 rounded-md px-1 flex-grow'
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="border border-orangevid mt-5 bg-base w-[160px] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
            type="submit"
          >
            Inscription
          </button>

          {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </form>
      </div>

      <div className='flex flex-col justify-center items-center w-full mt-5'>
        <Link
          className='border text-xs text-center border-orangevid mt-5 bg-base w-[140px] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer'
          href="/"
        >
          {` Retour à l'accueil `}
        </Link>
      </div>
    </div>
  )
}