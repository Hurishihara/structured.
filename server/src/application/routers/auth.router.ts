import { implement } from '@orpc/server';
import { contract } from '../../infrastructure/api/main.contract';
import { login } from '../procedures/auth.procedure';

const os = implement(contract);

export const authRouter = {
    login: login
}