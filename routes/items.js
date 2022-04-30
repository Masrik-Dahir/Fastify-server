const {getItems, getItem} = require('../controllers/items')

// Item Schema
const Item = {
    type: 'object',
        properties: {
            id: {type: 'integer'},
            name: {type: 'string'}
        } 
}


// Option for get all items
const getItemsOpts = {
    schema: {
        response : {
            200: {
                type: 'array',
                items: Item
            },
        },
    },
    handler: getItems,
}

// Option for get all items
const getItemOpts = {
    schema: {
        response : {
            200: Item
        },
    },
    handler: getItem,
}

function itemRoutes  (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
    
    // Get single items
    fastify.get('/items/:id', getItemOpts)

    
    done()
}
module.exports = itemRoutes