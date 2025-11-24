import { loginUserContract, registerUserContract } from '@shared/contracts/auth.contract.ts'

export const contract = {
    auth: {
        login: loginUserContract,
        register: registerUserContract
    }
}
