import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";

const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req) {
                const {email, password} = credentials;
                
                if(email !== 'james@wiki.com' || password != '12345') {
                    return null;
                }

                return {id: '12345', name: 'James Bond', email: 'james.bond@gmail.com' }

            },
        })
    ],
    pages: {
        signIn: '../../auth/signin',
        signOut: '../../auth/signout',
    }
}

export default NextAuth(authOptions);