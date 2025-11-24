import { loginUserContract, registerUserContract } from '@shared/contracts/auth.contract.js'

export const contract = {
    auth: {
        login: loginUserContract,
        register: registerUserContract
    }
}
