import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const ingredients = body.ingredients
    const prompt = `Crée une recette avec les ingrédients suivants en français : ${ingredients.join(', ')}`

    const ollamaUrl = 'https://vid-frigo.loca.lt/v1/chat/completions'

    const response = await axios.post(
      ollamaUrl,
      {
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const output = response.data.choices?.[0]?.message?.content || ''

    return NextResponse.json({ recipe: output.trim() })
  } catch (error) {
    console.error('[ERREUR API]:', error)
    return NextResponse.json({ recipe: null, error: 'Erreur serveur' }, { status: 500 })
  }
}