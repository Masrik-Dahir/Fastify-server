const {getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/items')

// Item Schema
const Item = {
    type: 'object',
        properties: {
        
            Item:{
                SK: {type: 'string'},
                PK: {type: 'string'},
                name: {type: 'string'},
                email: {type: 'string'},
                phone_number: {type: 'string'},
                hire_date: {type: 'string'},
                job_id: {type: 'string'},
                salary: {type: 'integer'},
                commission_pct: {type: 'number'},
                manager_id: {type: 'string'}
            }
        } 
}


// Option for get all items
const getItemsOpts = {
    schema: {
        response : {
            200: {
                Items:{
                    Item
                },
                Count: {type: 'string'},
                ScannedCount: {type: 'string'}
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
        },
        response : {
            201: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            }
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