import { loginUserContract, registerUserContract } from './contracts/auth.contract';

export const contract = {
    auth: {
        login: loginUserContract,
        register: registerUserContract
    }
}