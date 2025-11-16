import { oc } from "@orpc/contract";
import z from "zod";

export const AuthSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6)
})

export const loginUserContract = oc
    .input(AuthSchema)
    .output(z.object({
        message: z.string(),
    }))


export const authContract = {
    loginUser: loginUserContract,
}