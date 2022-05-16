const { v4:uuidv4 } = require('uuid')
let items = require ('../Items')

const AWS = require("aws-sdk");
AWS.config.update ({region: "us-east-1"});
const dynamodb = new AWS.DynamoDB.DocumentClient();

const getItems = (req, reply) => {
    // reply.send(items)

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    var params = {
        TableName: 'happy-projects',
        KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
        ExpressionAttributeNames: {'#PK': 'PK', '#SK' : 'SK'},
        ExpressionAttributeValues: {
        ':PK': `ORG#${happyIncOrgId}`,
        ':SK': `#METADATA#`
        }
    };
        
    dynamodb.query(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            reply.send(data);
        }
    });
}

const getItem = (req, reply) => {
    const {id} = req.params
    // const item = items.find(item => item.id === id)
    

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    var params = {
        TableName : 'happy-projects',
        Key: {
            PK : `ORG#${happyIncOrgId}`, 
            SK: `#METADATA#${id}`
        }
    };
        
    dynamodb.get(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            reply.send(data)
        }
    });
    
}

const addItem = (req, reply) => {
    const {name} = req.body
    const {tier} = req.body


    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    const projectId = uuidv4();

    var params = {
        TableName : 'happy-projects',
        Item: {
        PK: `ORG#${happyIncOrgId}`,
        SK: `#METADATA#${projectId}`,
        name: name,
        tier: tier
        }
    };
    
    dynamodb.put(params, function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data);
            // reply.code(201).send(data);
        }
    });



}

const deleteItem = (req, reply) => {
    const {id} = req.params

    const PK_Id = "c89608cf-39a7-4589-9eea-173ae87192da";
    const SK_Id = id;
    var params = {
        TableName : 'happy-projects',
        Key: {
            PK : `ORG#${PK_Id}`, 
            SK: `#METADATA#${SK_Id}`
        }
    };
    
    dynamodb.delete(params, function(err, data) {
        if (err) console.log(err);
        else reply.send({message: `Item ${id} has been removed`});
    });
}

const updateItem = (req, reply) => {
    const {id} = req.params

    const happyIncOrgId = "c89608cf-39a7-4589-9eea-173ae87192da";
    var params = {
        TableName: 'happy-projects',
        Key: { 
            PK : `ORG#${happyIncOrgId}`, 
            SK: `#METADATA#${id}`
        },
        UpdateExpression: 'set #name = :name',
        ExpressionAttributeNames: {'#name' : 'name'},
        
        ExpressionAttributeValues: {
        ':name' : "Masrik"
        },

        UpdateExpression: 'set #tier = :tier',
        ExpressionAttributeNames: {'#tier' : 'tier'},
        ExpressionAttributeValues: {
            ':tier' : 'Dahir'
        },


    };
    
    dynamodb.update(params, function(err, data) {
        if (err) console.log(err);
        else reply.send(data);
    });
}

module.exports = {
    getItems, 
    getItem,
    addItem,
    deleteItem,
    updateItem
}