const {getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/items')

// Item Schema
const Item = {
    type: 'object',
        properties: {
            id: {type: 'string'},
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

// Option for adding items
const postItemOpts = {
    schema: {
        body:{
            type: 'object',
            required: ['name'],
            properties: {
                name: {
                    type: 'string'
                }
            }
        },
        response : {
            201: Item
        },
    },
    handler: addItem,
}

// Option for deleting items
const deleteItemOpts = {
    schema: {
        response : {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            }
        },
    },
    handler: deleteItem,
}

// Option for get all items
const updateItemOpts = {
    schema: {
        response : {
            200: Item
        },
    },
    handler: updateItem,
}


function itemRoutes  (fastify, options, done) {
    // Get all items
    fastify.get('/items', getItemsOpts)
    
    // Get single items
    fastify.get('/items/:id', getItemOpts)

    // Add item
    fastify.post('/items', postItemOpts)

    //Delete items
    fastify.delete('/items/:id', deleteItemOpts)

    //Update items
    fastify.put('/items/:id', updateItemOpts)

    
    done()
}
module.exports = itemRoutes