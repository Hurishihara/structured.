import express from 'express';
import cors from 'cors'
import { RPCHandler } from '@orpc/server/node';
import { onError, onSuccess, ORPCError } from '@orpc/server';
import { router } from './application/routers/main.route.ts';
import { context } from './infrastructure/utils/context.ts';
import { CORSPlugin } from '@orpc/server/plugins';

const app = express()

app.use(cors())

const handler = new RPCHandler(router, {
    plugins: [
        new CORSPlugin()
    ],
    interceptors: [
        onSuccess((result) => {
            console.log('RPC Success:', result.response.body);
        })
    ],
})

app.use('/rpc', async (req, res, next) => {
    const { matched } = await handler.handle(req, res, {
        prefix: '/rpc',
        context: {
            useCases: context.useCases,
        }
    })
    if (matched) {
        return;
    }
    next();
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})