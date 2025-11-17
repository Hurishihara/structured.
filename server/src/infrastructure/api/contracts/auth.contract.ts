import { oc } from '@orpc/contract';
import z from 'zod';

export const AuthSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6)
})

export const loginUserContract = oc
    .route({
        method: 'POST',
        path: '/login',
        successStatus: 200,
    })
    .input(AuthSchema)
    .output(z.object({
        message: z.string(),
    }))
    
export const registerUserContract = oc
    .route({
        method: 'POST',
        path: '/register',
        successStatus: 201
    })
    .errors({
        BAD_REQUEST: {
            message: 'Invalid registration data',
            data: z.object({
                reason: z.string()
            })
        }
    })
    .input(AuthSchema)
    .output(z.object({
        message: z.string(),
    }))


export const authContract = {
    loginUser: loginUserContract,
    registerUser: registerUserContract
}