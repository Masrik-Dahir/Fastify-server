const express = require('express');

const fastify = require('fastify', 'cors')({logger: true})

fastify.addHook('onSend', function(request, reply, payload, done) {
    reply.headers({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    })
    done()
  })

  
fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'HTTP API using Fastify',
        }
    }
})

fastify.register(require('fastify-cors'), {
    credentials: true,
    optionsSuccessStatus: 200
 })

fastify.register(require('./routes/items'))

const PORT = 5000


const start = async () => {
    try{
        await fastify.listen(PORT)
    } catch (error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()