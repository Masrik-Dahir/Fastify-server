const fastify = require('fastify')({logger: true})
fastify.addHook('onSend', function(request, reply, payload, done) {
    reply.headers({'content-type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'})
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');
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