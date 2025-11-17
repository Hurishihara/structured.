import { implement } from '@orpc/server';
import { contract } from '../../infrastructure/api/main.contract.ts';
import { authRouter } from './auth.router.ts';

const os = implement(contract);

export const router = os.router({
    auth: authRouter
})