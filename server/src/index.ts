import express from 'express';
import cors from 'cors'
import { RPCHandler } from '@orpc/server/node';
import { onError, onSuccess, ORPCError } from '@orpc/server';
import { router } from './application/routers/main.route';

const app = express()

app.use(cors())

const handler = new RPCHandler(router, {
    interceptors: [
        onError((error ) => {
            if (error instanceof ORPCError) {
                throw new ORPCError('BAD_REQUEST', {
                    message: 'Authentication failed',
                    defined: error.defined
                })
            }
            console.error('Not RPC Error:', error);
            return;
        }),
        onSuccess((result) => {
            console.log('RPC Success:', result.response.body);
        })
    ],
})

app.use('/rpc', async (req, res, next) => {
    const { matched } = await handler.handle(req, res, {
        prefix: '/rpc',
        context: {}
    })
    if (matched) {
        return;
    }
    next();
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})