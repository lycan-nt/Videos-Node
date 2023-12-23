import {fastify } from 'fastify';
import { DatabasePostgres } from './database-postgres.js';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
const server = fastify();
const database = new DatabasePostgres;

await server.register(fastifySwagger, {
    
    swagger: {
      info: {
        title: 'VideosNode API',
        description: 'CRUD Videos Node',
        version: '1.0.0',
      },
    },
    host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
    exposeRoute: true,
  });

  await server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  });

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body;
    await database.create({
        title: title,
        description: description,
        duration: duration
    });
    console.log(database.list());
    return reply.status(201).send();
});

server.get('/videos', async (request, reply) => {
    const search = request.query.search;
    const videos = await database.list(search);
    return videos;
});

server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;
    await database.update(videoId, {
        title,
        description,
        duration
    });
    reply.status(204).send();
});

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    await database.delete(videoId);
    return reply.status(204).send();
});

const start = async () => {
    try {
      await server.listen({
        host: '0.0.0.0',
        port: process.env.PORT ?? 3000
    });
        server.ready(err => {
            if (err) throw err
            server.swagger()
        })
      server.log.info(`Servidor rodando em: ${server.server.address().port}`);
    } catch (err) {
        console.error(err)
        process.exit(1);
    }
  };
  
  start();