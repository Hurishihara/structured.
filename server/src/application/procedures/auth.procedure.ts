import { implement, ORPCError, } from '@orpc/server';
import { contract } from '../../infrastructure/api/main.contract';
import { Context } from '../../infrastructure/utils/context';

const os = implement(contract).$context<Context>()

export const login = os.auth.login
    .handler(async ({ input, context }) => {
        try {
            const result = await context.useCases.auth.loginUseCase.execute(input.username, input.password);
            return {
                message: result
            }
        }
        catch (err: unknown) {
            if (err instanceof ORPCError) {
                throw err;
            }
        }
    })

export const register = os.auth.register
    .handler(async ({ input, context }) => {
        try {
            const result = await context.useCases.auth.registerUseCase.execute(input.username, input.password);
            return {
                message: result
            }
        }
        catch (err: unknown) {
            throw err;
        }
    })
