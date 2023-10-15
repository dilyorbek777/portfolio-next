import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { WordpressUserPartialFragment } from '../graphql/generated/graphql';
declare module 'next-auth' {
    interface Session extends WordpressUserPartialFragment {
        response: {
            accessToken: string;
            id: string;
            avatar: {
                url: string;
            };
            description: string | null;
            slug: string;
            username: string;
            email: string;
            firstName: string;
            lastName: string;
            token_exp: string;
            refresh_token: string;
            locale: string;
        };
    }
}