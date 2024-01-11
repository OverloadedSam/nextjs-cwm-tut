import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/prisma/client';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'text',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password!
        );
        if (!passwordsMatch) return null;

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // session: {
  //   strategy: 'database',
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
