import { login, register } from '../procedures/auth.procedure.ts';

export const authRouter = {
    login: login,
    register: register
}