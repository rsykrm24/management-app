import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"

let authOption = NextAuth({
  providers:[
    GoogleProviders({
      clientId:process.env.GOOGLE_CLIENTID,
      clientSecret:process.env.GOOGLE_CLIENTSECRET
    })
    ],
  secret:process.env.NEXT_SECRET
})

export default authOption