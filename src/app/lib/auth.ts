// lib/auth.ts
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Carlos", email: "test@example.com" }
        console.log(credentials);
        return user
      },
      
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/connexion", // ta page de login
  },
}