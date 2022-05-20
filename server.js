const express = require('express');

const fastify = require('fastify', 'cors')({logger: true})
fastify.addHook('onSend', function(request, reply, payload, done) {
    reply.headers({
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "POST"
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


fastify.register(require('./routes/items'))

// fastify.register(require('@fastify/cors'), function (instance) {

//     return (req, callback) => {
//       let corsOptions;
//       const origin = req.headers.origin
//       // do not include CORS headers for requests from localhost
//       const hostname = new URL(origin).hostname
//       if(hostname === "localhost"){
//         corsOptions = { origin: false }
//       } else {
//         corsOptions = { origin: true }
//       }
//       callback(null, corsOptions) // callback expects two parameters: error and options
//     }
//   })

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