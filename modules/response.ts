import { FastifyReply } from 'fastify';

export const Success = async(reply: FastifyReply, code: number, data?: any) => {
    return reply.code(code).send({ success: true, data });
};

export const Failed = async(reply: FastifyReply, code: number, data?: any) => {
    return reply.code(code).send({ error: true, code, data});
};

export const Catch = async(reply: FastifyReply, data?: any) => {
    return reply.send({ error: true, code: 'catch', data });
}