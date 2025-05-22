import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-white border border-orangevid rounded-xl min-h-screen m-3 md:m-12 flex flex-col">
        <div className="">
          <h1 className="text-center text-6xl mt-5 md:mt-18 text-brunclair">{`Vid'Frigo`}</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 mt-6 md:mt-14 gap-5 md:gap-24">
        <Link href="/connexion">
          <button className="border border-orangevid bg-base w-[160] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer">Connexion</button>
          </Link>
          <Link href="/inscription">
          <button className="border border-orangevid bg-base w-[160] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer">Créer un compte</button>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
          <Image className="w-36 md:w-48" src="/assets/logo/logo-vid-frigo.svg" alt="logo vid frigo" width={300} height={300} />
        </div>
        <div className="flex items-center justify-center mt-2 md:mt-12">
          <Link href="/recette">
          <button className="border border-bluedark bg-vertclair w-[260] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer">Trouve ta recette</button>
          </Link>
        </div>
        <div className="bg-vertclair rounded-xl p-4 md:p-8 m-3 mt-12 md:mx-64 md:m-12 mt-6 md:mt-24 shadow-xl shadow-brunclair">
          <p className="text-center md:text-xl"><span className="font-bold">{`“Frigo vide ? Challenge accepté !”`}</span> <br /> <br />
           {` Tape ce qu’il te reste au fond du frigo, on te sort une recette digne d’un chef… `}<br />
            ou presque. Moins de galère, plus de saveur, et zéro excuse pour commander des nouilles encore une fois !</p>
        </div>
      </div>
    </div>
  );
}
