import { implement } from '@orpc/server';
import { contract } from '../../infrastructure/api/contract.js';
import { authRouter } from './auth.router.js';

const os = implement(contract);

export const router = os.router({
    auth: authRouter
})