import { NextResponse } from 'next/server'
import { spawn } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json()
    const ingredients = body.ingredients
    const prompt = `Crée une recette avec les ingrédients suivants en français : ${ingredients.join(', ')}`
    console.log('[PROMPT]:', prompt)

  
    const tmpPath = path.join(os.tmpdir(), `prompt-${Date.now()}.txt`)
    fs.writeFileSync(tmpPath, prompt)

    return new Promise((resolve) => {
      const child = spawn('ollama', ['run', 'llama3'], {
        shell: true,
        stdio: ['pipe', 'pipe', 'pipe'],
        env: process.env,
      })

      const input = fs.readFileSync(tmpPath)
      child.stdin.write(input)
      child.stdin.end()

      let output = ''
      let errorOutput = ''

      child.stdout.on('data', (data) => {
        output += data.toString()
      })

      child.stderr.on('data', (data) => {
        errorOutput += data.toString()
      })

      child.on('close', (code) => {
        fs.unlinkSync(tmpPath) 

        if (code !== 0) {
          console.error('[ERREUR]:', errorOutput)
          return resolve(
            NextResponse.json({ recipe: null, error: `Code ${code}` }, { status: 500 })
          )
        }

        console.log('[RECETTE]:', output.trim())
        resolve(NextResponse.json({ recipe: output.trim() }))
      })
    })
  } catch (err) {
    console.error('[ERREUR API]:', err)
    return NextResponse.json({ recipe: null, error: 'Erreur serveur' }, { status: 500 })
  }
}