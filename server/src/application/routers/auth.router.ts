import { login, register } from '../procedures/auth.procedure.js';

export const authRouter = {
    login: login,
    register: register
}