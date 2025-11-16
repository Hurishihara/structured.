import { implement, ORPCError } from '@orpc/server';
import { contract } from '../../infrastructure/api/main.contract';

const os = implement(contract);

export const login = os.auth.login
    .handler(({ input }) => {
        console.log('Login attempt for user:', input.username);
        if (input.username === 'admin' && input.password === 'password') {
            return { message: 'fake-jwt-token' };
        }
        throw new ORPCError('Invalid username or password');
    })
