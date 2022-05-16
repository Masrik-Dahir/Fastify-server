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
    const {email} = req.body
    const {phone} = req.body
    const {hire_date} = req.body
    const {job_id} = req.body
    const {salary} = req.body
    const {commission_pct} = req.body
    const {manager_id} = req.body
    const {department_id} = req.body
    const item= {
        id: uuidv4(),
        name,
        email,
        phone, 
        hire_date,
        job_id,
        salary,
        commission_pct,
        manager_id,
        department_id

    }
    items = [...items, item]
    reply.code(201).send(item)


}

const deleteItem = (req, reply) => {
    const {id} = req.params

    items = items.filter(item => item.id !== id)

    reply.send({message: `Item ${id} has been removed`})
}

const updateItem = (req, reply) => {
    const {id} = req.params
    const {name} = req.body
    const {email} = req.body
    const {phone} = req.body
    const {hire_date} = req.body
    const {job_id} = req.body
    const {salary} = req.body
    const {commission_pct} = req.body
    const {manager_id} = req.body
    const {department_id} = req.body


    items = items.map(item => (item.id === id ? {id, name, email, phone, hire_date, 
                                                job_id, salary, commission_pct, 
                                                manager_id, department_id} : item))

    item = items.find(item => item.id === id)

    reply.send(item)
}

module.exports = {
    getItems, 
    getItem,
    addItem,
    deleteItem,
    updateItem
}