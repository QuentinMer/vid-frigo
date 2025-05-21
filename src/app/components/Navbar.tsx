"use client";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
      const pathname = usePathname()

  const linkStyle = (path: string) => 
    `md:text-2xl font-bold hover:text-orangevid ${
      pathname === path ? 'text-orangevid' : 'text-brunclair'
    }`
  return (
    <>
        <Link href="/" className='absolute left-4 top-8 md:top-4'>
        <Image className='md:w-24 w-20' src="/assets/logo/logo-vid-frigo.svg" alt='logo vid frigo' width={200} height={200}/>
        </Link>
    <div className='text-white flex flex-col gap-2 md:gap-24 md:flex-row justify-center items-center mt-8 md:mt-12'>
      <Link href="/mesrecettes" className={linkStyle('/mesrecettes')}>
        Mes recettes</Link>   
      <Link href="/recette" className={linkStyle('/recette')}>
        Rechercher une recette</Link>  
      <Link href="/frigo" className={linkStyle('/frigo')}>
        Mon frigo</Link>   
    </div>
    </>
  )
}

export default Navbar
