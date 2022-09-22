import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '../../auth/signin',
        signOut: '../../auth/signout',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const {email, password} = credentials
                
                if (!email || !password)
                    throw new Error("email/password missing!");
                
                if(email === 'james@wiki.com' && password === '12345')
                    return {id: '1', name: 'James Bond', email: 'james.bond@gmail.com' }

                    throw new Error("username/password do not match!");

            },
        })
    ],
}

export default NextAuth(authOptions);