import fastifyPlugin from 'fastify-plugin';
import { Server, IncomingMessage, ServerResponse } from 'http'
import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';

import { ParseIP } from './ip'
import { ParseBytes } from './bytes'
import { Log } from './logger'

export const Logger = fastifyPlugin(function Logger(server: FastifyInstance<Server, IncomingMessage, ServerResponse>, _, next?: () => void) {
    server.addHook('onResponse', (request: FastifyRequest, reply: FastifyReply) => {
        const ipAddress = ParseIP(request)
        const method = request.raw.method;
        const route = request.raw.url;
        const code = reply.statusCode;
        const rawSize = reply.getHeader('content-length');
        const size = ParseBytes(Number(rawSize));

        Log(`${method} ${route} - ${code} - ${reply.getResponseTime().toFixed(2)}ms (${size}) - IP: ${ipAddress}`);
    });

    if(next) next();
});

export const Missing = fastifyPlugin(function Missing(server: FastifyInstance<Server, IncomingMessage, ServerResponse>, _, next?: () => void) {
    server.setNotFoundHandler((_request: FastifyRequest, reply: FastifyReply) => {
        reply.code(404).send({ error: true, code: 'route_not_found' });
    });

    if(next) next();
});

//email regex 
// /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i