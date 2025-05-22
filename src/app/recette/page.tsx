import Link from "next/link"
import RecetteForm from "../components/RecetteForm"
export default function RecettePage() {
  return (
    <div className="bg-white border border-orangevid rounded-xl min-h-screen m-3 md:m-12 flex flex-col">
      <h1 className="text-xl md:text-4xl font-bold text-orangevid text-center mt-2 md:mt-12">Créateur de recette par ingrédients</h1>
      <RecetteForm />
         <Link
          href="/"
          className="mx-auto border text-xs text-center border-orangevid mt-5 bg-base w-[160] py-1 rounded-md shadow-md shadow-brunclair text-black hover:bg-orangevid hover:text-white active:shadow-none cursor-pointer"
        >
          Retour à l'accueil
        </Link>
    </div>
  )
}