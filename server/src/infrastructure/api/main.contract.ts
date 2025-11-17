import { loginUserContract, registerUserContract } from './contracts/auth.contract.ts';

export const contract = {
    auth: {
        login: loginUserContract,
        register: registerUserContract
    }
}